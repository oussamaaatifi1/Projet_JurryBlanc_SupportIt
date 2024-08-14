import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtServiceService } from '../../service/jwt-service.service';
import { Router } from '@angular/router'; // Import Router
// import { AuthService } from '../../service/';
import { Jwt } from '../../Model/jwt'; // Adjust path as needed
import { AuthentificationService } from 'src/app/service/authentification.service';
// import { RegisterRequest } from '../model/RegisterRequest'; // Adjust path as needed

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerForm!: FormGroup;

  constructor(
    private service: AuthentificationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nom: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup): void {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }
  onSubmit(): void {
    console.log(this.registerForm.value);
    this.service.register(this.registerForm.value).subscribe(
      (response) => {
        console.log(response)
      }
    )
    this.service.registerTechnicien(this.registerForm.value).subscribe(
      (response) => {
        console.log(response)
      }
    )
  }
}
