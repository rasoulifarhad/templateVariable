import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateVariable';


  // The TemplateRef holds the reference template defined by ng-template.
  // ViewContainerRef, when injected to via DI holds the reference to the host element, that hosts the component (or directive).
  @ViewChild('sayAnotherHelloTemplate', {read: TemplateRef}) sayAnotherHelloTemplate! : TemplateRef<any>;

  constructor(private viewContainerRef:ViewContainerRef) {}

  ngAfterViewInit() {
    this.viewContainerRef.createEmbeddedView(this.sayAnotherHelloTemplate);
  }

  selected = false;
}
