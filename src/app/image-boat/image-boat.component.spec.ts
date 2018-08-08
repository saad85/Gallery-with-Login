import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBoatComponent } from './image-boat.component';

describe('ImageBoatComponent', () => {
  let component: ImageBoatComponent;
  let fixture: ComponentFixture<ImageBoatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageBoatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
