import { Component } from "@angular/core";

@Component({
    selector: 'app-conunter',
    template: `
        CONUNTER:{{conuter}}
        <button (click)="increment(+1)">+1</button>
        <button (click)="reset()" >reset</button>
        <button (click)="increment(-1)" >-1</button>
        <hr>
     `
    }
)

export class CounterComponent{

    title = 'Hola mundo';

  public conuter:number =10

  increment(value:number):void{
      this.conuter=this.conuter +value
  }


  reset(){
    this.conuter=10
  }
}