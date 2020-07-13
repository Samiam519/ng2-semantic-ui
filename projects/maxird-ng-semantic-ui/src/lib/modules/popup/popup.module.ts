import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SuiUtilityModule } from '../../misc/util/util.module';
import { SuiTransitionModule } from '../transition/transition.module';
import { SuiPopup } from "./components/popup";
import { SuiPopupArrow } from "./components/popup-arrow";
import { SuiPopupDirective } from "./directives/popup.directive";
import { SuiPopupConfig } from "./services/popup.service";

@NgModule({
    imports: [
        CommonModule,
        SuiTransitionModule,
        SuiUtilityModule
    ],
    declarations: [
        SuiPopupDirective,
        SuiPopupArrow,
        SuiPopup
    ],
    exports: [
        SuiPopupDirective,
        SuiPopup
    ],
    providers: [
        SuiPopupConfig
    ],
    entryComponents: [
        SuiPopup
    ]
})

export class SuiPopupModule {}
