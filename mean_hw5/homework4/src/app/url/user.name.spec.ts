import { TestBed, async } from '@angular/core/testing';
import { UserName } from './user.name';

describe('UserUrl', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserName
      ],
    }).compileComponents();
  }));

  it('should create the user url', () => {
    const fixture = TestBed.createComponent(UserName);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
