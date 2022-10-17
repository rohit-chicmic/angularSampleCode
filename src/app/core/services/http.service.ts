import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private API_SERVER = environment.apiUrl;
  headers = new HttpHeaders({
    // "authorization": sessionStorage.getItem("token")
  });

  headersForMultiPartForm = new HttpHeaders({
    'Content-Type': 'multipart/form-data'
  })


  constructor(private httpClient: HttpClient) {
    this.handleError = this.handleError.bind(this)
  }

  handleError(error: HttpErrorResponse) {

    let errorMessage;
    if (error.status === 0) {
      errorMessage = "Network Error";
    }
    return throwError(error.error ? error.error.errors : {});
  }

  public getData(apiPath: string, data?: any) {
    let url = this.API_SERVER;
    if (apiPath.includes('get-messages')) {
      return this.httpClient.get<any>(`${this.API_SERVER}/v1/declaration/get-messages`, { params: data });
    } else {
      return this.httpClient.get<any>(`${url}${apiPath}`, { ...(data && { params: data }) })
    }
  }

  public postData(apiPath: string, data?: any, params?: any) {
    if (apiPath.includes('forgot-password')) {
      return this.httpClient.post<any>(`${this.API_SERVER}/v1/user/forgot-password`, data);
    }
    else if (apiPath.includes('reply-to-message')) {
      return this.httpClient.post<any>(`${this.API_SERVER}/v1/declaration/reply-to-message`, data);
    }
    else {
      return this.httpClient.post<any>(`${this.API_SERVER}${apiPath}`, data, { params: params });
    }

  }

  public postUploadData(apiPath: string, data?: any) {
    return this.httpClient.post<any>(`${this.API_SERVER}${apiPath}`, data, {
      headers: new HttpHeaders({
        'Accept': 'multipart/form-data'
      })
    });
  }

  public patchData(apiPath: string, data?: any, params?: HttpParams) {
    return this.httpClient.patch(`${this.API_SERVER}${apiPath}`, data, { headers: this.headers, params: params }).pipe(map((response: any) => {
      return response;
    }), catchError(this.handleError));
  }

  public putData(apiPath: string, data?: any, params?: HttpParams) {
    if (apiPath.includes("reset-password")) {
      return this.httpClient.put<any>(`${this.API_SERVER}/v1/user/reset-password`, data).pipe(catchError(this.handleError));
    } else if (apiPath.includes("updateUser")) {
      return this.httpClient.put<any>(`${this.API_SERVER}/v1/user/updateUser`, data);
    }
    else {
      const url = `${this.API_SERVER}${apiPath}`;
      return this.httpClient.put<any>(url, data, { params: params });
    }
  }

  public deleteData(apiPath: string, data?: any) {
    let url = this.API_SERVER;
    return this.httpClient.delete(`${url}${apiPath}`, { params: data })
      .pipe(catchError(this.handleError));
  }


  public delete(apiPath: string, data?: any) {
    let url = this.API_SERVER;
    return this.httpClient.delete(`${url}${apiPath}`, data)
      .pipe(catchError(this.handleError));
  }
}