import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})

export class TextComponent implements OnInit {

  @Input() public contentText: string;
  @Output() emitContent = new EventEmitter<string> ();

  constructor() { }

  ngOnInit(): void {
  }

  getContent(event: any) {
    event.preventDefault();

    this.contentText = event.target.value;
    this.emitContent.emit(this.contentText);

    // console.log("função text: ", this.contentText)
  }

  getContentClick(event: any) {
    event.preventDefault();

    this.emitContent.emit(this.contentText);

    // console.log("função text: ", this.contentText)
  }

}
