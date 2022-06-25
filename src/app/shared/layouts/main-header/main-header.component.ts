import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  @Output() displayMenu = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }


  onDisplayMenu() {
    this.displayMenu.emit(true)
  }
}
