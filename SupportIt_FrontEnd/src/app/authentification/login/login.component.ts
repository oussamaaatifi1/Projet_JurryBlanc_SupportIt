import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../service/authentification.service';
import { Role } from '../../Model/enum/Role'; // Import the Role enum

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private service: AuthentificationService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  submitForm(form: FormGroup): void {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;
    this.service.login(email, password).subscribe(
      (response: { token: string }) => {
        this.service.saveToken(response.token);
        const role = this.service.getRole();
        console.log('Role after login:', role);
        if (role === Role.ADMIN) { 
          this.router.navigate(['/admin/dashboard']);
        } else if (role === Role.TECHNICIEN) { 
          this.router.navigate(['/technician/dashboard']);
        } else if (role === Role.USER) { 
          this.router.navigate(['/user/dashboard']);
        } else {
          console.error('Unknown role:', role);
          this.errorMessage = 'Unknown role.';
        }
      },
      (error: any) => {
        console.error('Login failed', error);
        this.errorMessage = 'Login failed. Please check your email and password.';
      }
    );
  }
}
