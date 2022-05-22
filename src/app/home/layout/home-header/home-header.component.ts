import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  @Output() displayMenu = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }


  onDisplayMenu() {
    this.displayMenu.emit(true)
  }
}
