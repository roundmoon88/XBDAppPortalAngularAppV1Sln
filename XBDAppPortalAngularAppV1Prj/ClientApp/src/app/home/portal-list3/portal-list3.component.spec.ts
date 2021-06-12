
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PortalList3Component } from './portal-list3.component';

let component: PortalList3Component;
let fixture: ComponentFixture<PortalList3Component>;

describe('portal-list3 component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PortalList3Component ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PortalList3Component);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
