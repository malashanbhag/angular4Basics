import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.name = 'Mala Shanbhag';
    this.age = 24;
    this.email = 'shanbhag.mala9@gmail.com',
    this.address = {
      street:'Kormangala',
      city:'Bangalore',
      state:'Karnataka'
    };
    this.hobbies = ['Write Code','Watch Movies'];

    this.dataService.getPosts().subscribe((posts)=>{
      this.posts = posts

    });
  }

  onClick(){
    this.name = 'Mala';
  }

  addHobby(value){
    console.log(value);
    this.hobbies.unshift(value);
    return false;
  }

  deleteHobby(hobby){
    for(let i=0;i<this.hobbies.length;i++){
      if(this.hobbies[i] === hobby){
          this.hobbies.splice(i,1);
      }
    }
    console.log(hobby);
  }

  editUser(){
    this.isEdit = !this.isEdit;
  }
}

interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}
