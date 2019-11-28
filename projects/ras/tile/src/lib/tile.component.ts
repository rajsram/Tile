import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tile } from './tile.model';

@Component({
  selector: 'ras-tiles',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  /**
   * @description tile input data
   */
  @Input() tilesData: Tile[];
  /**
   * @description tile click event emitter
   */
  @Output() tileClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * @description tile click event
   * @param id to emit tile id on click tile
   */
  tileClicked(id) {
    this.tileClick.emit(id);
  }

}
