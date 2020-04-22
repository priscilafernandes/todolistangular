import { Component, OnInit } from '@angular/core';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  tasks: string[] = []
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor() { }

  ngOnInit(): void {
    { 
      usuario: "email@email.com.br" 
      cartoes: [ 
        {
          conteudo: "Preparar a aula", 
          cor: "rgb(118, 239, 64)"
        },
        {
          conteudo: "Preparar a avaliação", 
          cor: "rgb(118, 239, 64)"
        }  
      ] 
    }
  }
  addHero(newHero: string){
    if (newHero) {
    this.heroes.push(newHero);
    }
  }

}
