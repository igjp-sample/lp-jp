import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxExpansionPanelModule } from 'igniteui-angular';
import { UitoolsComponent } from './uitools.component';

describe('UitoolsComponent', () => {
  let component: UitoolsComponent;
  let fixture: ComponentFixture<UitoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UitoolsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxExpansionPanelModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UitoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
