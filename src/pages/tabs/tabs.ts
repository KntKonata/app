import { Component } from '@angular/core';

import { AccountPage } from "../account/account";
import { AgendaPage } from "../agenda/agenda";
import { NotifPage } from "../notif/notif";
import { MessagePage } from "../message/message";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccountPage;
  tab2Root = AgendaPage;
  tab3Root = MessagePage;
  tab4Root = NotifPage;

  constructor() {

  }
}
