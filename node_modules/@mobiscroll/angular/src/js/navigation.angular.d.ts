import { ElementRef, NgZone, QueryList, MbscOptionsService } from './frameworks/angular';
import { Navigation } from './classes/navigation';
import { MbscNotifyItemService } from './classes/scrollview-base.angular';
import { MbscNavItemBase, MbscNavigationBase } from './classes/navigation-base.angular';
import { MbscNavOptions } from './classes/navigation';
export { MbscNavOptions };
export declare class MbscNavItem extends MbscNavItemBase {
    _instance: Navigation;
    initialBadge: string;
    badge: string;
    constructor(notifyItemService: MbscNotifyItemService, elem: ElementRef);
}
export declare class MbscNavBaseComponent extends MbscNavigationBase {
    optionService: MbscOptionsService;
    _instance: Navigation;
    type: 'bottom' | 'hamburger' | 'tab';
    select: 'single';
    moreText: string;
    moreIcon: string;
    menuText: string;
    menuIcon: string;
    inlineOptions(): MbscNavOptions;
    constructor(initialElem: ElementRef, zone: NgZone, notifyItemService: MbscNotifyItemService, optionService: MbscOptionsService);
    items: QueryList<MbscNavItemBase>;
    ngAfterViewInit(): void;
}
export declare class MbscBottomNav extends MbscNavBaseComponent {
    constructor(initialElem: ElementRef, zone: NgZone, navItemService: MbscNotifyItemService, optionService: MbscOptionsService);
}
export declare class MbscHamburgerNav extends MbscNavBaseComponent {
    constructor(initialElem: ElementRef, zone: NgZone, navItemService: MbscNotifyItemService, optionService: MbscOptionsService);
}
export declare class MbscTabNav extends MbscNavBaseComponent {
    constructor(initialElem: ElementRef, zone: NgZone, navItemService: MbscNotifyItemService, optionService: MbscOptionsService);
}
