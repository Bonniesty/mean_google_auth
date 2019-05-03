import { Component, OnInit } from '@angular/core';
import {UserUrl} from '../url/user.url';
import {UserName} from '../url/user.name';
import {LoginUrl} from "../url/login.url";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  data={};
  title = 'homework4';
  name: any;

  constructor(private userData: UserUrl, private userName: UserName, private  login: LoginUrl) {
    this.name = 'Tianyi Sun';
    //this.userData=UserUrl.getDog();


    this.getUserList();





  }

  ngOnInit() {
    //this.getUserList();
    console.log(this.data);

  }

  getUserList():void {
    this.userData.getDog()
      .subscribe(data =>{ this.data = data; console.log(data) });
  }

  onSelect(): void {
    this.getUserList();
  }


  onSelectLog():void{
    console.log("hhhh")
    this.login.getLogin();
    console.log("hhhh")

  }




}
