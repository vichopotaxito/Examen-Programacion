import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocentePage } from './docente.page';

describe('DocentePage', () => {
  let component: DocentePage;
  let fixture: ComponentFixture<DocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});

it('Debe generar un codigo qr', () => {
  const comp = TestBed.createComponent(DocentePage);
  const qrCodeString = comp.componentInstance.qrCodeString['qrCode'];
  qrCodeString.setValue('123456');
  expect(comp.componentInstance.qrCodeString.localeCompare).toEqual(true);
  });
