import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemCardComponent } from './imagem-card.component';

describe('ImagemCardComponent', () => {
  let component: ImagemCardComponent;
  let fixture: ComponentFixture<ImagemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagemCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
