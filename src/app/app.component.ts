import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

class Movie {

  constructor(public  title: string, public director: string){}
}

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

  movies = [
    new Movie("title 1", "director 1"),
    new Movie("title 2", "director 2"),
    new Movie("title 3", "director 3"),
  ]

  trackById(index: number, movie: Movie) {
    return index;
  }

  num?: number;
}
