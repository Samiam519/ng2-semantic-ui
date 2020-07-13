import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SuiCollapseModule } from '../collapse/collapse.module';
import { SuiTransitionModule } from '../transition/transition.module';
import { SuiAccordion } from './components/accordion';
import { SuiAccordionPanel } from './components/accordion-panel';

@NgModule({
    imports: [
        CommonModule,
        SuiCollapseModule,
        SuiTransitionModule
    ],
    declarations: [
        SuiAccordion,
        SuiAccordionPanel
    ],
    exports: [
        SuiAccordion,
        SuiAccordionPanel
    ],
    providers: []
})
export class SuiAccordionModule {}
