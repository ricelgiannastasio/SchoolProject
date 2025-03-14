
  import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
template: `
<div class="container">
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div formGroupName="email">
            <label for="email">Email</label>
            <input id="email" type="text" formControlName="email" />
        </div>
        <div formGroupName="password">
            <label for="password">Password</label>
            <input id="password" type="password" formControlName="password" />
        </div>
    </form>
</div>
`
})
export class SchoolProjectComponent {
form: FormGroup = new FormGroup({
email: new FormControl('', [Validators.required, Validators.email]),
password: new FormControl('', [Validators.required, Validators.minLength(6)])
});
onSubmit() {
const email = this.form.get('email').value;
const password = this.form.get('password').value;
console.log(`Email is ${email} and Password is ${password}`);
}
constructor(private http: HttpClient) {}
}