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

  formSubmitted = false;

  user = {
    summaryUserName: '',
    summaryEmail: '',
    summaryQuestion: '',
    summaryAnswer: '',
    summaryGender: ''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';

    // [KEY] Call NgForm.setValue() to set values on the form, but it requires all fields and will overwrite everything.
    // this.signupForm.setValue({
    //   userData: {
    //     userName: suggestedName,
    //     email: 'test@testmail.com'
    //   },
    //   secret: 'teacher',
    //   questionAnswer: 'Miss Thomas',
    //   gender: 'female'
    // });

    // [KEY] Call NgForm.form.patchValue() to only overwrite certain fields
    this.signupForm.form.patchValue({
      userData: {
        userName: suggestedName
      }
    })
  }

  onSubmit()
  {
    this.formSubmitted = true;

    this.user.summaryUserName = this.signupForm.value.userData.username;
    this.user.summaryEmail = this.signupForm.value.userData.email;
    this.user.summaryQuestion = this.signupForm.value.secret;
    this.user.summaryAnswer = this.signupForm.value.questionAnswer;
    this.user.summaryGender = this.signupForm.value.gender;
  }
}
