import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';
import { JokesComponent } from './components/jokes/jokes.component';
import { AComponent } from './component/a/a.component';
import { B1Component } from './component/b1/b1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,
    CommonModule,JokesComponent,AComponent,B1Component],
  templateUrl: './app.component.html',
  //template:'<h1>Welcome to Angular first tutorial</h1>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First angular app';

   users = [
    {id:1,name:"Kush",age:25,isMarried:false,salary:50000},
    // {id:2,name:"Deepak",age:27,isMarried:true,salary:4000},
    // {id:3,name:"Anuj",age:23,isMarried:false,salary:35000},
  ]

  // receiveData(value:string) {
  //   console.log("The string is:"+value);
  // }

  receiveData(e:User) {
    const userIndex = this.users.findIndex(user => user.id == e.id);
    this.users[userIndex].salary = e.salary;
   console.log(e);
  }


  clearData(){
    this.users = [];
  }
}
