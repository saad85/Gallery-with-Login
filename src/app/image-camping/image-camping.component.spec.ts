import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCampingComponent } from './image-camping.component';

describe('ImageCampingComponent', () => {
  let component: ImageCampingComponent;
  let fixture: ComponentFixture<ImageCampingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCampingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
