import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { SearchPipe } from './Pipes/search.pipe';
import { InputBoxComponent } from './table/components/input-box/input-box.component';

@NgModule({
  declarations: [AppComponent, TableComponent, SearchPipe, InputBoxComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
