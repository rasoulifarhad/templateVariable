import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  value: boolean = false;
  @Input()
  childTemplate!: TemplateRef<any>;

  ctx = {
    message: 'custom message from child component'
  }
  constructor() {

  }
}
