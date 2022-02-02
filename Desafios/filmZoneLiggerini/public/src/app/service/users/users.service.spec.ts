import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { User } from "../../models/User";
import { UsersService } from './users.service';

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
}

const userDB: User[] = [
  {
    _id: "61eec25122e6bcd2e9a28055",
    userName: "ligge10",
    email: "liggerinileo@gmail.com",
    password: "1234",
    isAdmin: true
  },
  {
    _id: "61eefb7fc2ef0b0b782b4ef4",
    userName: "juan12",
    email: "juan@ggmail.com",
    password: "Juan12345",
    isAdmin: false
  }
]


describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        {
          provide: HttpClient,
          useClass: HttpClientMock
        }
      ],
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(UsersService);
  });

  it('should exist user', () => {
    service.setUser(userDB[0]);
    const user = service.getUser();
    expect(user).toBeDefined();
    expect(user.userName).toEqual(userDB[0].userName);
  
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
