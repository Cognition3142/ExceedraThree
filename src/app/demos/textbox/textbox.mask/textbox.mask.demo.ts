import { Component, OnInit } from '@angular/core';

import {TextboxMask} from '../../../models/textbox/textbox.mask.model';


@Component({
    moduleId: module.id,
    selector: 'exceedra-textbox-mask-demo',
    templateUrl: 'textbox.mask.demo.html',
    styleUrls: ['textbox.mask.demo.css']
})

export class ExceedraTextboxMaskDemoComponent implements OnInit {

    initialSetup: TextboxMask = {
        mask: '999',
        maskValidation: true,
        value: '12a',
        disabled: false
    };

    constructor() { }

    ngOnInit(): void {

    }

}
