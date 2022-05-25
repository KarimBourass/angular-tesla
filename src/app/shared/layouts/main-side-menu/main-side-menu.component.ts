import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'main-side-menu',
  templateUrl: './main-side-menu.component.html',
  styleUrls: ['./main-side-menu.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ width: 320, right: -320 }),
            animate('.4s ease-out', style({ right: 0, width: 320 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ width: 320, right: 0 }),
            animate('.4s ease-in', style({ right: -320 }))
          ]
        )
      ]
    )
  ]
})
export class MainSideMenuComponent implements OnInit {

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
