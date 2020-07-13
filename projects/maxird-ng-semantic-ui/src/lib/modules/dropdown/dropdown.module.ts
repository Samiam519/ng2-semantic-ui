import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SuiTransitionModule } from '../transition/transition.module';
import { SuiDropdown } from "./directives/dropdown";
import { SuiDropdownMenu, SuiDropdownMenuItem } from "./directives/dropdown-menu";

@NgModule({
    imports: [
        CommonModule,
        SuiTransitionModule
    ],
    declarations: [
        SuiDropdown,
        SuiDropdownMenu,
        SuiDropdownMenuItem
    ],
    exports: [
        SuiDropdown,
        SuiDropdownMenu,
        SuiDropdownMenuItem
    ]
})
export class SuiDropdownModule {}
