import { Component } from '@angular/core';

import { TextboxNumeric } from '../../../models/textbox/textbox.numeric.model';
import { ITextboxNumeric } from '../../../models/textbox/textbox.numeric.model';



@Component({
    moduleId: module.id,
    selector: 'exceedra-textbox-numeric-demo',
    templateUrl: 'textbox.numeric.demo.html',
    styleUrls: ['textbox.numeric.demo.css']
})

export class ExceedraTextboxNumericDemoComponent {

    bio: string = 
`This is a numbers only textbox.   

| Properties    | Examples      | Required  | Description               |
| ------------- |:-------------:| --------- | :---:                     |
| value         | Any number    | Yes       | Initial value.            |
| format        | n0, c2: <a href="https://msdn.microsoft.com/en-us/library/dwhawy9k.aspx">More</a>   | Yes       | Format for value.        |
| min           | Any number    | No        | Min. possible value.      |
| max           | Any number    | No        | Max. possible value.      |
| autoCorrect   | true, false   | No        | Overrides user entries    |

`;

    /* Demo one... */

    demoOneMarkdownString: string =
`### Demo One - Basic
---
Here is a simple demo displaying the JSON shape required for a numeric textbox.`;
    demoOneXmlIn: string = 'This is the xml in...';
    demoOneJsonOut: string = `{ "value": 500.004, "format": "n3" }`;
    demoOneModelInput: TextboxNumeric = <ITextboxNumeric>JSON.parse(this.demoOneJsonOut);

    jsonOutChange(event: string) {
        try {
            this.demoOneModelInput = <ITextboxNumeric>JSON.parse(event);
        }
        catch (e) {
            console.log("JSON Parse Error:");
            console.log(e);
        }
    }



    /* Demo two... */

    demoTwoMarkdownString: string =
`### Demo Two - Min & Max
---
Here is a demo displaying the min and max setting. You may set only one if you like.
`;
    demoTwoXmlIn: string = 'This is the xml in...';
    demoTwoJsonOut: string = `{ "value": 500.05, "format": "c2", "min": 495, "max": 505 }`;
    demoTwoModelInput: TextboxNumeric = <ITextboxNumeric>JSON.parse(this.demoTwoJsonOut);

    jsonOutChangeTwo(event: string) {
        console.log("Got json out: " + event);

        try {
            this.demoTwoModelInput = <ITextboxNumeric>JSON.parse(event);
        }
        catch (e) {
            console.log("JSON Parse Error:");
            console.log(e);
        }
    }



    /* Demo three... */

    demoThreeMarkdownString: string =
    `### Demo Three - Auto Correct
---
Auto Correct will modify a users input to match with the selected formats precision specifier (i.e. the number bit in the format).   
If false then only the visual value will follow the format, but the underlying value will be what the user entered.   
If true then the visual value and underlying value will always be equal.   
In the example, the visual value is rounded to the formats precision. But click to edit the value and you can see the underlying precision.
`;
    demoThreeXmlIn: string = 'This is the xml in...';
    demoThreeJsonOut: string = `{ "value": 500.55555, "format": "n2", "autoCorrect": false }`;
    demoThreeModelInput: TextboxNumeric = <ITextboxNumeric>JSON.parse(this.demoThreeJsonOut);

    jsonOutChangeThree(event: string) {
        console.log("Got json out: " + event);

        try {
            this.demoThreeModelInput = <ITextboxNumeric>JSON.parse(event);
        }
        catch (e) {
            console.log("JSON Parse Error:");
            console.log(e);
        }
    }
}
