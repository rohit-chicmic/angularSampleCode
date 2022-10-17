import { Injectable } from '@angular/core';
import { APIS } from 'src/app/common/constants';
import { forgotPasswordModel, loginModel, resetPasswordModel, signUpModel, updatePasswordModel } from 'src/app/common/interfaces';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private httpService: HttpService) { }

  login(data: loginModel) {
    return this.httpService.postData(APIS.AUTH.LOGIN, data);
  }

  signUp(data: signUpModel) {
    return this.httpService.postData(APIS.AUTH.SIGN_UP, data);
  }

  forgotPassword(data: forgotPasswordModel) {
    return this.httpService.postData(APIS.AUTH.FORGOT_PASSWORD, data);
  }

  resetPassword(data: resetPasswordModel) {
    return this.httpService.putData(APIS.AUTH.RESET_PASSWORD, data);
  }

  updatePassword(data: updatePasswordModel) {
    return this.httpService.putData(APIS.AUTH.UPDATE_PASSWORD, data);
  }
  
}
