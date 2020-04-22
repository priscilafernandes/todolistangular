import { Component, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  // contentText = new EventEmitter<string> ();
  contentText:string

  constructor() { }

  ngOnInit(): void {
  }
  
  getContent(event) {
    // this.contentText.emits(event.target.value);
    this.contentText = event.target.value
    console.log(this.contentText);
    
  }
  getContentClick(event){
    event.preventDefault()
    console.log(this.contentText);
    
  }
}
