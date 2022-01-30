import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { XhrInterceptor } from './xhr.interceptor';

describe('XhrInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ 
      RouterTestingModule.withRoutes([]),
      RouterModule
    ],
    providers: [
      XhrInterceptor,
      HttpHandler,
      HttpClient
    ]
  }));

  it('should be created', () => {
    const interceptor: XhrInterceptor = TestBed.inject(XhrInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
