import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'xml-converter',
    templateUrl: 'xmlconverter.component.html',
    styleUrls: ['xmlconverter.component.css']
})

export class XmlCoverterComponent implements OnInit {

    @Input()
    xmlIn: string;

    /* In production, this won't exist. But until we have the webservice converter, it will help simulate the actual work flow. */
    @Input()
    jsonOut: string;

    @Output()
    jsonOutput: EventEmitter<string> = new EventEmitter<string>();

    manualOutput() {
        this.jsonOutput.emit(this.jsonOut);
    }


    constructor() { }

    ngOnInit(): void {
        //TODO: Push the xmlIn value to our webservice for conversion to JSON.

    }
    


}
