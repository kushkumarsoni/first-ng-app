import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../services/jokes.service';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent implements OnInit {

  jokes = 'loading';
  constructor(public jokeService:JokesService) {}

  ngOnInit() {
    this.getAnotherJoke();
  }

  getAnotherJoke(){
    this.jokes = 'loading';
    // this.jokeService.getJoke().subscribe((data:any) => {
    //   this.jokes = data?.value;
    // })
    this.jokeService.getJoke().subscribe({
      next:(data:any) => this.jokes = data?.value,
      error:(error) => console.log('Error :',error.message)
    })
  }

}
