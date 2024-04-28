import { computed, effect, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  // This is normal way to manage the state code start
//   private count = 0

//  // constructor() { }

//   getCount() {
//     return this.count
//   }

//   setCount() {
//     return this.count = this.count + 1
//   }

  // This is normal way to manage the state code end.


  //using signal do the same work .
  //Signal are two types writtable and readble signal.


  private count = signal(0)

  constructor() {
    effect(() => {
      console.log('Count : ',this.count(),'Double count : ',this.doubleSignle())
    })
  }
  getCount() {
    return this.count()
  }

  setCount(){
    //return this.count.set(5)
    return this.count.update((oldValue) => {
      return oldValue + 1
    })
  }

  doubleSignle:Signal<number> = computed(() => this.count() * 2)



}
