import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;

  defaultQuestion: string = 'pet';

  answer: string = '';

  genders: string[] = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';

    // [KEY] Use NgForm to set values on the form!!!
    this.signupForm.setValue({
      userData: {
        userName: suggestedName,
        email: 'test@testmail.com'
      },
      secret: 'teacher',
      questionAnswer: 'Miss Thomas',
      gender: 'female'
    });
  }

  onSubmit()
  {
    console.log( this.signupForm );
  }
}
