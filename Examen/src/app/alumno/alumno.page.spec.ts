import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoPage } from './alumno.page';

describe('AlumnoPage', () => {
  let component: AlumnoPage;
  let fixture: ComponentFixture<AlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();


    it('should call login() method on button click', () => {
      spyOn(component, 'alumno');
      const button =
        fixture.debugElement.nativeElement.querySelector('ion-button');
      button.click();
      expect(component.alumno).toHaveBeenCalled();
    });
  
     it('should have a function startScan', () => {
      expect(component.startScan).toBeDefined();
    });
  
    
    it('should update scannedResult after calling startScan', () => {
      const expectedResult = 'MockQRCodeResult';
      spyOn(component, 'startScan').and.callFake(() => {
        component.scannedResult = expectedResult;
      });
      component.startScan();
      expect(component.scannedResult).toEqual(expectedResult);
    });
    
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




