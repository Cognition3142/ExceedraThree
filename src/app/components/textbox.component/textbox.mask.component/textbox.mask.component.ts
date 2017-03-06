import { Component, OnInit, Input } from '@angular/core';

import {TextboxMask} from '../../../models/textbox/textbox.mask.model';

@Component({
    moduleId: module.id,
    selector: 'exceedra-textbox-mask',
    templateUrl: 'textbox.mask.component.html',
    styleUrls: ['textbox.mask.component.css'],
})

export class ExceedraTextboxMaskComponent implements OnInit {

    @Input()
    setup: TextboxMask;

    constructor() { }

    ngOnInit(): void {
        if (!this.setup.mask)
        {

        }

    }

}
