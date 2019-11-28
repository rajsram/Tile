import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TileComponent } from './tile.component';



@NgModule({
  declarations: [TileComponent],
  imports: [
    BrowserModule
  ],
  exports: [TileComponent]
})
export class TileModule { }
