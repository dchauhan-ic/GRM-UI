import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    const copiedReq = req.clone({
      headers: req.headers.set('Content-Type', 'application/json;charset=UTF-8')
        .set('X-XSRF-TOKEN', 'Auth_1fec94aef78d4ac984db55ea37779802')
        .set('Accept', 'application/json')
    });
    return next.handle(copiedReq);
  }
}
