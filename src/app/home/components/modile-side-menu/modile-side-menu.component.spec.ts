import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModileSideMenuComponent } from './modile-side-menu.component';

describe('ModileSideMenuComponent', () => {
  let component: ModileSideMenuComponent;
  let fixture: ComponentFixture<ModileSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModileSideMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModileSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
