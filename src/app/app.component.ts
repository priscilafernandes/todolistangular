import { Component } from '@angular/core';
import { CardModel } from './card_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Minhas Tarefas';
  card = CardModel

  ngOnInit(){
    console.log('test'+this.card);
    
  }
}
