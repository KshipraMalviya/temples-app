import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplesMainComponent } from './temples-main.component';

describe('TemplesMainComponent', () => {
  let component: TemplesMainComponent;
  let fixture: ComponentFixture<TemplesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplesMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
