import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExceedraCheckboxComponent } from './components/checkbox.component/checkbox.component';
import { ExceedraDatepickerComponent } from './components/datepicker.component/datepicker.component';
import { ExceedraLabelComponent } from './components/label.component/label.component';
import { ExceedraMSDropdownComponent } from './components/msdropdown.component/msdropdown.component';
import { ExceedraSSDropdownComponent } from './components/ssdropdown.component/ssdropdown.component';

import { ExceedraTextboxBasicDemoComponent } from './demos/textbox/textbox.basic/textbox.basic.demo';
import { ExceedraTextboxNumericDemoComponent } from './demos/textbox/textbox.numeric/textbox.numeric.demo';
import { ExceedraTextboxMaskDemoComponent } from './demos/textbox/textbox.mask/textbox.mask.demo';


const routes: Routes = [
    { path: '', redirectTo: '/textboxbasic', pathMatch: 'full' },
    { path: 'textboxbasic', component: ExceedraTextboxBasicDemoComponent },
    { path: 'textboxmask', component: ExceedraTextboxMaskDemoComponent },
    { path: 'textboxnumeric', component: ExceedraTextboxNumericDemoComponent },
    { path: 'label', component: ExceedraLabelComponent },
    { path: 'datepicker', component: ExceedraDatepickerComponent },
    { path: 'checkbox', component: ExceedraCheckboxComponent },
    { path: 'ssdropdown', component: ExceedraSSDropdownComponent },
    { path: 'msdropdown', component: ExceedraMSDropdownComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
