import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcessoFormComponent } from './processo-form/processo-form.component';
import { ProcessoListComponent } from './processo-list/processo-list.component';
import { ProcessoDetailComponent } from './processo-detail/processo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcessoFormComponent,
    ProcessoListComponent,
    ProcessoDetailComponent  // Certifique-se de que o componente está declarado aqui
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
