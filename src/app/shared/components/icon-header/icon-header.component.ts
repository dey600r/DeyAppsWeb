import { Component, Input, OnInit } from '@angular/core';
import { InfoIconModel } from '@app/core/models';

@Component({
  selector: 'app-icon-header',
  templateUrl: './icon-header.component.html',
  styleUrls: ['./icon-header.component.scss']
})
export class IconHeaderComponent implements OnInit {

  @Input() dataInfo: InfoIconModel = new InfoIconModel();

  constructor() { }

  ngOnInit(): void {
  }

}
