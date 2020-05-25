import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Data {
  fname: string;
  lname: string;
  uname: string;
  email: string;
  password: string;
}
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor() { }

  onClickSubmit(data: Array<Data>) {
    console.log(data["fname"]);
    console.log(data["lname"]);
    console.log(data["uname"]);
    console.log(data["email"]);
    console.log(data["password"]); 

  }

}
