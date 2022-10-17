import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REGEX } from 'src/app/common/constants';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | undefined;
  constructor(
    private fb: FormBuilder, 
    private authService: AuthService
    ) { 
    this.initLoginForm();
  }

  ngOnInit(): void {
  }
  
  initLoginForm () {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(REGEX.EMAIL)]],
      password: ['', [Validators.required, Validators.pattern(REGEX.PASSWORD)]]
    })
  }

  login() {
    if((this.loginForm as FormGroup).valid) {
      this.authService.login((this.loginForm as FormGroup).value).subscribe(res => {
        console.log(res);
        
      })
    }
  }

}
