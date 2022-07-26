import { Component, OnInit} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
export class HeaderComponent implements OnInit {

  // @Output() displayMenu = new EventEmitter<boolean>();
  isDisplay: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  onDisplayMenu() {
    this.isDisplay = true
    // this.displayMenu.emit(true)
  }

  onCloseMenu() {
    this.isDisplay = false;
    // this.displayMenu.emit(this.isDisplay)
  }
}
