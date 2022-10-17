import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SpinnerService } from 'src/app/common/spinner/spinner.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private spinner: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token')
    this.spinner.showSpinner();
    if(token){
      request = request.clone({
        headers: request.headers.set('authorization', token)
      })
    }
    
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if(event instanceof HttpResponse) {
        this.spinner.HideSpinner();
      }
    }));
  }
}
