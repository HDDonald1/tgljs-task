import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameResultComponent } from './components/game-result/game-result.component';
import { TurnPickerComponent } from './components/turn-picker/turn-picker.component';
import { HelpModalComponent } from './components/help-modal/help-modal.component';
import { GameHeaderComponent } from './components/game-header/game-header.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    GameResultComponent,
    TurnPickerComponent,
    HelpModalComponent,
    GameHeaderComponent,
    BaseLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
