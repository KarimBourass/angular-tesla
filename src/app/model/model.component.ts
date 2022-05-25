import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  modelId!: string;
  modelImagePath!: string;
  isDisplayMobileMenu = false

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.modelId = params['id'];
      this.modelImagePath = `url(/assets/images/model-${this.modelId}.jpg)`
    });
  }

  onDisplaySideMenu(isDisplayMenu: boolean) {
    this.isDisplayMobileMenu = isDisplayMenu;
  }
}
