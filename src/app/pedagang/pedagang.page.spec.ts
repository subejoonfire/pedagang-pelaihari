import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedagangPage } from './pedagang.page';

describe('PedagangPage', () => {
  let component: PedagangPage;
  let fixture: ComponentFixture<PedagangPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PedagangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
