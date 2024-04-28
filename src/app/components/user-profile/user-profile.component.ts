import { CommonModule } from '@angular/common';
import { AfterViewInit, booleanAttribute, Component, ElementRef, EventEmitter, input, Input,
numberAttribute, OnChanges, OnDestroy, OnInit, Output,
SimpleChanges,
ViewChild,
viewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HightlightDirective } from '../../directives/hightlight.directive';

function getName(name:string) {
  return "Hello ," + " " +name
  // return "Hello ," + " " +name.toLocaleUpperCase()
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule,CountryCodePipe,HightlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements
 OnInit, OnDestroy, OnChanges, AfterViewInit {
  // first_name:string = "Kush"
  // middle_name:string = "Kumar"
  // last_name:string = "Soni"
  // age:number = 20
  // fullName:string = this.first_name +' ' +this.last_name +' ' +this.middle_name;
  // isButtonDisabled = false;

  // inputValue:string = "testing purpose"

  // getInputData(e:Event) {
  //   const value = (e.target as HTMLInputElement).value
  //   // console.log('You input is'+(e.target as HTMLInputElement).value);
  //   this.inputValue=value;
  // }

  // //array
  // users = [
  //   {id:1,name:"Kush",age:25,isMarried:false,salary:50000},
  //   {id:2,name:"Deepak",age:27,isMarried:true,salary:4000},
  //   {id:3,name:"Anuj",age:23,isMarried:false,salary:35000},
  // ]

  // @Input({alias:"userName",transform:getName}) name="";
  // @Input({transform:booleanAttribute}) isMarried!:boolean;
  // @Input({transform:numberAttribute}) salary!:number;
  // @Input({transform:numberAttribute}) age!:number;
  // @Input() id!:number;

  //@Input({transform:getName}) name!:string; without signal

  //using signal
  name = input("",{
    transform:getName
  })

  @Input({transform:booleanAttribute}) isMarried!:boolean;
  @Input({transform:numberAttribute}) salary!:number;
  @Input({transform:numberAttribute}) age!:number;
  @Input({transform:numberAttribute}) id!:number;

  // @Output() myEvent = new EventEmitter<string>();
  @Output() myEvent = new EventEmitter<User>();
  sendData() {
    // this.myEvent.emit("Welcome to codeflies");
    // this.myEvent.emit({id:this.id,name:this.name,age:this.age,salary:this.salary,isMarried:this.isMarried});
    this.myEvent.emit({id:this.id,name:this.name(),age:this.age,salary:1200,isMarried:this.isMarried});
  }

  //mobile number
  mobile:number = 7355787092

  constructor(){
    console.log('constructor called');
  }

  // ngOnChanges(){
  //   console.log('ngOnChanges');
  // }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges',changes);
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }


  @ViewChild('myParagraph') paragraph?:ElementRef

  ngAfterViewInit(): void {
     console.log('ngAfterViewInit', this.paragraph?.nativeElement.textContent);
  }

}
