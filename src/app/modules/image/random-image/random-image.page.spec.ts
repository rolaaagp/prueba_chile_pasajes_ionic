import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomImagePage } from './random-image.page';

describe('RandomImagePage', () => {
  let component: RandomImagePage;
  let fixture: ComponentFixture<RandomImagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
