import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'iron man';
  public age:number = 45;


  get capitalizeName():string{
    return this.name.toUpperCase();

  }

  getHerodescriotion():string{

    return  `${this.name} - ${this.age} `;
  }

  changeName():void{
    this.name="hulk"
  }

  changeAge():void{
    this.age=30
  }
}
