import { TestBed, async } from '@angular/core/testing';
import { Login } from './login.url';

describe('UserUrl', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Login
      ],
    }).compileComponents();
  }));

  it('should create the user url', () => {
    const fixture = TestBed.createComponent(Login);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
