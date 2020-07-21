import { ChangeDetectorRef, ElementRef, EventEmitter, Renderer2 } from "@angular/core";
import { SuiTransition } from '../../transition/directives/transition';
export declare class SuiDimmer extends SuiTransition {
    readonly hasClasses: boolean;
    private _transitionController;
    private _isDimmed;
    isDimmed: boolean;
    isDimmedChange: EventEmitter<boolean>;
    isClickable: boolean;
    transition: string;
    transitionDuration: number;
    wrapContent: boolean;
    constructor(renderer: Renderer2, element: ElementRef, changeDetector: ChangeDetectorRef);
    onClick(): void;
}
