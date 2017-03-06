import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges, ChangeDetectorRef } from '@angular/core';

import { TextboxNumeric } from '../../../models/textbox/textbox.numeric.model';

@Component({
    moduleId: module.id,
    selector: 'exceedra-textbox-numeric',
    templateUrl: 'textbox.numeric.component.html',
    styleUrls: ['textbox.numeric.component.css'],
})

export class ExceedraTextboxNumericComponent implements OnChanges {

    constructor(private ref: ChangeDetectorRef){}

    @Input()
    setup: TextboxNumeric;

    //Allows the control to override user input. True if min or max set.
    public autoCorrect: boolean;
    first: boolean = true;


    ngOnChanges(changes: SimpleChanges) {

        if (changes['setup']) {

            this.setAutoCorrect();

            this.forceChange(changes['setup']);
        }
    }

    /**
     * If min or max is set then we must autocorrect to enforce this.
     * If not set then we would require additional validation.
     */
    setAutoCorrect() {
        if (this.setup.max || this.setup.min) {
            this.setup.autoCorrect = true;
        }
    }

    /**
     * In demo, if the user updates format but not value the control doesn't immediatly update.
     * Here we invoke a value update to reflect this.    
     * @param change
     */
    forceChange(change: SimpleChange) {
        if (change.previousValue) {

            if (this.hasOnlyFormatChanged(change)) {
                var holdValue = this.setup.value;

                this.setup.value = null;
                this.ref.detectChanges()
                this.setup.value = holdValue;
            }
        }
    }

    /**
     * Check if the format has changed, but not the value
     * For demo purpose only. In production, format would be set once.     
     * @param change : The old and new value.
     */
    hasOnlyFormatChanged(change: SimpleChange) {
        return change.currentValue.format != change.previousValue.format
            && change.currentValue.value == change.previousValue.value;
    }

}
