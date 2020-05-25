import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Data {
  uname: string;
  emailid: string;
  password: string;
}
@Component({
  selector: 'sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(data: Array<Data>) {
    console.log(data["email"]);
    console.log(data["password"]);
  }

}
