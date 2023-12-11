import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PevsButtonComponent } from './pevs-button.component';

describe('PevsButtonComponent', () => {
  let component: PevsButtonComponent;
  let fixture: ComponentFixture<PevsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PevsButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PevsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
