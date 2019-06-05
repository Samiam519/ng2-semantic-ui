import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SuiLocalizationModule } from '../../behaviors/localization/localization.module';
import { SuiUtilityModule } from '../../misc/util/util.module';
import { SuiDropdownModule } from '../dropdown/dropdown.module';
import { SuiMultiSelect, SuiMultiSelectValueAccessor } from "./components/multi-select";
import { SuiMultiSelectLabel } from "./components/multi-select-label";
import { SuiSelect, SuiSelectValueAccessor } from "./components/select";
import { SuiSelectOption } from "./components/select-option";
import { SuiSelectSearch } from "./directives/select-search";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SuiDropdownModule,
        SuiUtilityModule,
        SuiLocalizationModule
    ],
    declarations: [
        SuiSelect,
        SuiSelectOption,
        SuiSelectSearch,
        SuiSelectValueAccessor,
        SuiMultiSelect,
        SuiMultiSelectLabel,
        SuiMultiSelectValueAccessor
    ],
    exports: [
        SuiSelect,
        SuiSelectOption,
        SuiSelectSearch,
        SuiSelectValueAccessor,
        SuiMultiSelect,
        SuiMultiSelectValueAccessor
    ]
})
export class SuiSelectModule {}
