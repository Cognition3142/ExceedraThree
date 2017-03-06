import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { } from 'jasmine';


import { ExceedraTextboxBasicComponent } from './textbox.basic.component';

describe('ExceedraTextboxBasicComponent (inline template)', () => {

    let comp: ExceedraTextboxBasicComponent;
    let fixture: ComponentFixture<ExceedraTextboxBasicComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [ExceedraTextboxBasicComponent], // declare the test component
        })
            .compileComponents();  // compile template and css

    }));

    // synchronous beforeEach
    beforeEach(() => {
        console.log("IN BEFORE EACH");
        fixture = TestBed.createComponent(ExceedraTextboxBasicComponent);

        comp = fixture.componentInstance; // BannerComponent test instance

        // query for the <input> by CSS element selector
        de = fixture.debugElement.query(By.css('input'));
        el = de.nativeElement;
    });

    it('should display nothing by default', () => {
        fixture.detectChanges();
        expect(el.textContent).toEqual('');
    });

    it('should display a model', () => {
        comp.setup = { value: 'Test Title' };
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect((<any>el).value).toBe('Test Title');
        });

    });

    it('should recognise input', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            expect((<any>el).value).toBe('');

            (<any>el).value = 'someValue';
            el.dispatchEvent(new Event('input'));

            expect(comp.setup).toBe('someValue');
        });

    });
});