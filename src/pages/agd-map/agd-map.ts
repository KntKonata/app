import { Component, ElementRef, ViewChild } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { Polyline, GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapsAnimation, MyLocation, Marker } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';

declare var google: any;

@Component({
  selector: 'page-agd-map',
  templateUrl: 'agd-map.html',
})

export class AgdMapPage {

  public courseId = this.navParams.get('courseId');

  public myLatLng;
  public myLat;
  public myLng;
  public test;

  @ViewChild('map_canvas2') mapElement: ElementRef;
  map: any;
  public directionsService = new google.maps.DirectionsService;
  public directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform : Platform, private _GEOCODE  : NativeGeocoder, private geolocation: Geolocation) {}

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.initMap();
    })
  }

  initMap() {


    let latlong;

    this.geolocation.getCurrentPosition().then((position) => {
      this.myLat = position.coords.latitude;
      this.myLng = position.coords.longitude;

      latlong = new google.maps.LatLng(this.myLat, this.myLng);

      this.myLatLng = latlong;

      let map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 15,
        center: this.myLatLng
      });

      this.directionsDisplay.setMap(map);

      this.directionsService.route({
        origin: this.myLatLng,
        destination: { lat: 48.695858, lng: 6.123274 },
        waypoints: [
          {
            location: { lat: 49.117912, lng: 6.177136 },
            stopover: true
          }],
        travelMode: 'DRIVING'
      }, (response, status) => {
        if (status === 'OK') {
          this.directionsDisplay.setDirections(response);
        } else {
          alert('Directions request failed due to ' + status);
        }
      });

    }).catch((error) => {
      alert('Error getting location ' + error);
    });
  }


  /*
  loadMap() {
    // Create a map after the view is loaded.
    // (platform is already ready in app.component.ts)
    this.map = GoogleMaps.create('map_canvas2', {
      camera: {
        target: {
          lat: 48.856613,
          lng: 2.352222
        },
        zoom: 0,
        tilt: 0
      }
    });
    this.map.clear();

    // Get the location of you
    this.map.getMyLocation()
      .then((location: MyLocation) => {
        console.log(JSON.stringify(location, null ,2));

        this.myLatLng = location.latLng;
        this.myLat = location.latLng.lat;
        this.myLng = location.latLng.lng;

        this.reverseGeocode(location.latLng.lat, location.latLng.lng);

        // Move the map camera to the location with animation
        this.map.animateCamera({
          target: location.latLng,
          zoom: 5,
          tilt: 0
        })
          .then(() => {

            // add a marker
            let marker: Marker = this.map.addMarkerSync({
              title: 'Position actuelle',
              snippet: this.test,
              position: location.latLng,
              icon: 'blue'
            });

            // show the infoWindow
            marker.showInfoWindow();

            this.directionsDisplay.setMap(this.map);

            this.map.addMarker({
              title: 'Départ',
              snippet: '11 Place du Forum - Metz',
              position: {
                lat: 49.117912,
                lng: 6.177136
              }
            });
            this.map.addMarker({
              title: 'Arrivé',
              snippet: '3 Rue du Mouzon - Nancy',
              position: {
                lat: 48.695858,
                lng: 6.123274
              }
            });
          });
      });
  }
  */

  /*
  reverseGeocode(lat : number, lng : number) : Promise<any> {
    return new Promise((resolve, reject) =>
    {
      this._GEOCODE.reverseGeocode(lat, lng)
        .then((result:NativeGeocoderReverseResult[]) =>
        {
          this.test = `${result[0].subThoroughfare} ${result[0].thoroughfare} - ${result[0].locality}`;
        })
        .catch((error: any) =>
        {
          reject(error);
        });
    });
  }
  */

}
