import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modile-side-menu',
  templateUrl: './modile-side-menu.component.html',
  styleUrls: ['./modile-side-menu.component.scss'],
})
export class ModileSideMenuComponent implements OnInit {

  @Output() displayMenu = new EventEmitter<boolean>();
  @Input() isDisplay: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }


  onCloseMenu() {
    this.isDisplay = false;
    this.displayMenu.emit(this.isDisplay)
  }

}
