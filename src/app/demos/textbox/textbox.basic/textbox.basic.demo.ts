import { Component } from '@angular/core';

import { TextboxBasic } from '../../../models/textbox/textbox.basic.model';

@Component({
    moduleId: module.id,
    selector: 'exceedra-textbox-basic-demo',
    templateUrl: 'textbox.basic.demo.html',
    styleUrls: ['textbox.basic.demo.css']
})

export class ExceedraTextboxBasicDemoComponent {

    bio: string = `This is the most simple of textboxes. It accepts any input and has no validation.`;

    /* Demo one... */

    demoOneMarkdownString: string = 
`### Demo One - Basic
---
Here is a simple demo displaying the JSON shape required for a plain textbox.   
Modify the value in the JSON and hit Manual Output to see the textbox update.`;
    demoOneXmlIn: string = 'This is the xml in...';
    demoOneJsonOut: string = '{ "value": "ABCDEFG" }';
    demoOneModelInput: TextboxBasic = {
        value: "ABCDEFG"
    };

    jsonOutChange(event: string) {
        console.log("Got json out: " + event);

        try {
            this.demoOneModelInput = JSON.parse(event);
        }
        catch (e)
        {
            console.log("JSON Parse Error:");
            console.log(e);
        }
    }

    /* Demo two... */

}
