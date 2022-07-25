import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-s',
  templateUrl: './model-s.component.html',
  styleUrls: ['./model-s.component.scss']
})
export class ModelSComponent implements OnInit {

  modelId: string = 's';
  modelName: string = 's';
  modelImagePath: string = "/assets/images/models.webp";
  isDisplayMobileMenu = false

  constructor() { }

  ngOnInit(): void {
  }

  onDisplaySideMenu(isDisplayMenu: boolean) {
    this.isDisplayMobileMenu = isDisplayMenu;
  }

}
