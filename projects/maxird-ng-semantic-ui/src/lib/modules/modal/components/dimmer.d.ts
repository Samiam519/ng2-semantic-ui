import { ChangeDetectorRef, ElementRef, Renderer2 } from "@angular/core";
import { SuiDimmer } from '../../dimmer/components/dimmer';
export declare class SuiModalDimmer extends SuiDimmer {
    readonly hasClasses: boolean;
    constructor(renderer: Renderer2, element: ElementRef, changeDetector: ChangeDetectorRef);
}
