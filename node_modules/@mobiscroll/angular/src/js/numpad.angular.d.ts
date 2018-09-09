import { MbscFrameBase, EventEmitter, ElementRef, NgZone, NgControl, MbscInputService, MbscOptionsService, ViewContainerRef } from './frameworks/angular';
import { Numpad, MbscNumpadOptions } from './classes/numpad';
export { MbscNumpadOptions };
export declare abstract class MbscNumpadBase extends MbscFrameBase {
    optionService: MbscOptionsService;
    _instance: Numpad;
    allowLeadingZero: boolean;
    deleteIcon: string;
    fill: 'ltr' | 'rtl';
    leftKey: {
        text: string;
        variable?: string;
        value?: string;
    };
    mask: string;
    placeholderChar: string;
    rightKey: {
        text: string;
        variable?: string;
        value?: string;
    };
    template: string;
    validate: (data: {
        values: Array<any>;
        variables: any;
    }, inst: any) => ({
        disabled: Array<any>;
        invalid: boolean;
    });
    onSet: EventEmitter<{
        valueText: string;
        inst: any;
    }>;
    onClear: EventEmitter<{
        inst: any;
    }>;
    cancelText: string;
    clearText: string;
    setText: string;
    inlineOptions(): MbscNumpadOptions;
    inlineEvents(): MbscNumpadOptions;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService, view: ViewContainerRef);
}
export declare class MbscNumpad extends MbscNumpadBase {
    options: MbscNumpadOptions;
    protected preset: string;
    value: any;
    onChangeEmitter: EventEmitter<any>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService, view: ViewContainerRef);
    setNewValue(v: any): void;
    ngAfterViewInit(): void;
}
export declare class MbscNumpadComponent extends MbscNumpad {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscNumpadOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
export declare class MbscNumpadDecimal extends MbscNumpad {
    value: any;
    onChangeEmitter: EventEmitter<number>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService, view: ViewContainerRef);
}
export declare class MbscNumpadDecimalComponent extends MbscNumpadDecimal {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscNumpadOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
export declare class MbscNumpadDate extends MbscNumpadBase {
    value: Date | '';
    onChangeEmitter: EventEmitter<Date>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService, view: ViewContainerRef);
    setNewValue(v: Date): void;
    ngAfterViewInit(): void;
}
export declare class MbscNumpadDateComponent extends MbscNumpadDate {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscNumpadOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
export declare class MbscNumpadTime extends MbscNumpadBase {
    value: string;
    onChangeEmitter: EventEmitter<string>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService, view: ViewContainerRef);
    setNewValue(v: string): void;
    ngAfterViewInit(): void;
}
export declare class MbscNumpadTimeComponent extends MbscNumpadTime {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscNumpadOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
export declare class MbscNumpadTimespan extends MbscNumpad {
    value: number | '';
    onChangeEmitter: EventEmitter<number>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService, view: ViewContainerRef);
}
export declare class MbscNumpadTimespanComponent extends MbscNumpadTimespan {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscNumpadOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
