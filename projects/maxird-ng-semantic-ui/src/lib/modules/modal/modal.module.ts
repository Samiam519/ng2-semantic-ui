import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SuiUtilityModule } from '../../misc/util/util.module';
import { SuiDimmerModule } from '../dimmer/dimmer.module';
import { SuiTransitionModule } from '../transition/transition.module';
import { SuiModalDimmer } from "./components/dimmer";
import { SuiModal } from "./components/modal";
import { SuiModalService } from "./services/modal.service";

@NgModule({
    imports: [
        CommonModule,
        SuiDimmerModule,
        SuiTransitionModule,
        SuiUtilityModule
    ],
    declarations: [
        SuiModal,
        SuiModalDimmer
    ],
    exports: [
        SuiModal
    ],
    providers: [
        SuiModalService
    ],
    entryComponents: [
        SuiModal
    ]
})
export class SuiModalModule {}
