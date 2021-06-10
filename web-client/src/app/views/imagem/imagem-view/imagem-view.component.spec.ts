import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemViewComponent } from './imagem-view.component';

describe('ImagemViewComponent', () => {
  let component: ImagemViewComponent;
  let fixture: ComponentFixture<ImagemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagemViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
