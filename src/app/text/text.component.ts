import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})

export class TextComponent implements OnInit {

  @Output() emitContent = new EventEmitter<string> ();

  contentText:string

  constructor() { }

  ngOnInit(): void {
  }

  getContent(event) {
    this.emitContent.emit(event.target.value);
  }

}
