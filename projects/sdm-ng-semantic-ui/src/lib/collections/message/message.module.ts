import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SuiTransitionModule } from '../../modules/transition/transition.module';
import { SuiMessage } from "./components/message";

@NgModule({
    imports: [
        CommonModule,
        SuiTransitionModule
    ],
    declarations: [
        SuiMessage
    ],
    exports: [
        SuiMessage
    ]
})
export class SuiMessageModule {}
