import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    it('Debe retornar usuario valido', () => {
      const comp = TestBed.createComponent(LoginPage);
      const user = comp.componentInstance.correo['correo'];
      const password = comp.componentInstance.password['password'];
      user.setValue('ejemplo@duocuc.cl');
      password.setValue('123456');
      expect(comp.componentInstance.correo.localeCompare).toEqual(true);
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

