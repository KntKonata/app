import { ElementRef, MbscBase, MbscOptionsService } from './frameworks/angular';
import { Popup, MbscPopupOptions, MbscWidgetOptions } from './classes/popup';
export { MbscPopupOptions };
export { MbscWidgetOptions };
export declare class MbscPopup extends MbscBase {
    optionService: MbscOptionsService;
    _instance: Popup;
    options: MbscPopupOptions;
    constructor(initialElem: ElementRef, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
export declare class MbscWidget extends MbscPopup {
}
