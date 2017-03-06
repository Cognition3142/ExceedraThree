import { Component, Input, OnInit, ViewEncapsulation  } from '@angular/core';
import * as marked from 'marked';

@Component({
    moduleId: module.id,
    selector: 'markdown',
    templateUrl: 'markdown.component.html',
    styleUrls: ['markdown.component.css'],
    encapsulation: ViewEncapsulation.None,
})

export class MarkdownComponent implements OnInit {

    @Input()
    markdownString: string;

    markdownHtml: string; 

    ngOnInit(): void {
        this.markdownHtml = marked.parse(this.markdownString); 
    }
}
