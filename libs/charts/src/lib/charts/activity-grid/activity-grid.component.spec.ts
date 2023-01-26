import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityGridComponent } from './activity-grid.component';

describe('ActivityGridComponent', () => {
    let component: ActivityGridComponent;
    let fixture: ComponentFixture<ActivityGridComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ActivityGridComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ActivityGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
