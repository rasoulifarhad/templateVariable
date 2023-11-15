import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[ttif]'
})
export class TtifDirective {

  _ttif!: boolean;
  constructor(private _viewContainer: ViewContainerRef, private _templateRef: TemplateRef<any>) { }

  @Input()
  set ttif(condition: boolean) {
    this._ttif = condition;
    this._updateView();
  }

  _updateView() {
    if(this._ttif) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainer.clear();
    }
  }
}
