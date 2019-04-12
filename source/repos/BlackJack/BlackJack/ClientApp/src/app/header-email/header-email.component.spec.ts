import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEmailComponent } from './header-email.component';

describe('HeaderEmailComponent', () => {
  let component: HeaderEmailComponent;
  let fixture: ComponentFixture<HeaderEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
