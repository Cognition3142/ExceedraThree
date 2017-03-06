import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* 3rd Part Modules */
import { InputsModule } from '@progress/kendo-angular-inputs';

/* Exceedra Components */
import { ExceedraCheckboxComponent } from './components/checkbox.component/checkbox.component';
import { ExceedraTextboxMaskComponent } from './components/textbox.component/textbox.mask.component/textbox.mask.component';
import { ExceedraTextboxNumericComponent } from './components/textbox.component/textbox.numeric.component/textbox.numeric.component';
import { ExceedraTextboxBasicComponent } from './components/textbox.component/textbox.basic.component/textbox.basic.component';

import { ExceedraDatepickerComponent } from './components/datepicker.component/datepicker.component';
import { ExceedraLabelComponent } from './components/label.component/label.component';
import { ExceedraMSDropdownComponent } from './components/msdropdown.component/msdropdown.component';
import { ExceedraSSDropdownComponent } from './components/ssdropdown.component/ssdropdown.component';

/* Demo Components */
import { XmlCoverterComponent } from './demo.components/xmlconverter.component/xmlconverter.component';
import { MarkdownComponent } from './demo.components/markdown.component/markdown.component';

/* Exceedra Component Demos */
import { ExceedraTextboxBasicDemoComponent } from './demos/textbox/textbox.basic/textbox.basic.demo';
import { ExceedraTextboxNumericDemoComponent } from './demos/textbox/textbox.numeric/textbox.numeric.demo';
import { ExceedraTextboxMaskDemoComponent } from './demos/textbox/textbox.mask/textbox.mask.demo';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule, InputsModule],
    declarations:
    [
        AppComponent,
        ExceedraCheckboxComponent,
        ExceedraTextboxBasicComponent,
        ExceedraTextboxMaskComponent,
        ExceedraTextboxNumericComponent,
        ExceedraDatepickerComponent,
        ExceedraLabelComponent,
        ExceedraMSDropdownComponent,
        ExceedraSSDropdownComponent,

        XmlCoverterComponent,
        MarkdownComponent,

        ExceedraTextboxBasicDemoComponent,
        ExceedraTextboxNumericDemoComponent,
        ExceedraTextboxMaskDemoComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }