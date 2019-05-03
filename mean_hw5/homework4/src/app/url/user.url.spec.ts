import { TestBed, async } from '@angular/core/testing';
import { UserUrl } from './user.url';

describe('UserUrl', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserUrl
      ],
    }).compileComponents();
  }));

  it('should create the user url', () => {
    const fixture = TestBed.createComponent(UserUrl);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
