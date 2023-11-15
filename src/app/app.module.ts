import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './template/simple/simple.component';
import { ChildTemplateComponent } from './child-template/child-template.component';
import { TabComponent } from './tab/tab.component';
import { TtifDirective } from './ttif.directive';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    ChildTemplateComponent,
    TabComponent,
    TtifDirective,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
