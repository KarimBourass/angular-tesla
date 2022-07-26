import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSHeroComponent } from './model-s-hero.component';

describe('ModelSHeroComponent', () => {
  let component: ModelSHeroComponent;
  let fixture: ComponentFixture<ModelSHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelSHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelSHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
