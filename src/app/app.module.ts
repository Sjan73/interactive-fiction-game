import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import {FormsModule} from "@angular/forms";
import {CapitalizePipe} from "./core/pipes/capitalize.pipe";
import {GameService} from "./core/services/game/game.service";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
