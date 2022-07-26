import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model3HeroComponent } from './model3-hero.component';

describe('Model3HeroComponent', () => {
  let component: Model3HeroComponent;
  let fixture: ComponentFixture<Model3HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Model3HeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Model3HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
