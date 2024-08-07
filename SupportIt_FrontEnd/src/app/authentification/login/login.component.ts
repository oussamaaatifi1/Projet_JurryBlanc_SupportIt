import { Component,OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jwt } from '../../Model/Jwt'; 
import { JwtServiceService } from '../../service/jwt-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private service: JwtServiceService,
    private fb: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  submitForm(): void {
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe(
      (response: Jwt) => {
        console.log('API Response:', response);
        const jwToken = response.access_token;
        if (jwToken) {
          localStorage.setItem('jwt', jwToken);
          this.router.navigateByUrl("/user/dashboard");
        } else {
          console.error('JWT token is undefined');
        }
      },
      error => {
        console.error('Error during login:', error);
      }
    );
  }
}
