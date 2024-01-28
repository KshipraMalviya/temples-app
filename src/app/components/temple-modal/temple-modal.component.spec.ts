import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleModalComponent } from './temple-modal.component';

describe('TempleModalComponent', () => {
  let component: TempleModalComponent;
  let fixture: ComponentFixture<TempleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempleModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
