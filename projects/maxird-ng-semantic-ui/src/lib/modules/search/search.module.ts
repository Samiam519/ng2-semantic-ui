import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SuiLocalizationModule } from '../../behaviors/localization/localization.module';
import { SuiUtilityModule } from '../../misc/util/util.module';
import { SuiDropdownModule } from '../dropdown/dropdown.module';
import { SuiSearch } from "./components/search";
import { SuiSearchResult } from "./components/search-result";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SuiDropdownModule,
        SuiLocalizationModule,
        SuiUtilityModule
    ],
    declarations: [
        SuiSearch,
        SuiSearchResult
    ],
    exports: [
        SuiSearch
    ]
})
export class SuiSearchModule {}
