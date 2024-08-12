import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(){}

  register(regForm:NgForm){
    console.log(regForm.value)
    

  }
  reset(regForm:NgForm){
    regForm.reset()
  }
}