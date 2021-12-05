import { Component, Input, OnInit } from '@angular/core';
import { InfoBaseIconModel } from '@app/core/models/info-base.model';

@Component({
  selector: 'app-icon-links',
  templateUrl: './icon-links.component.html',
  styleUrls: ['./icon-links.component.scss']
})
export class IconLinksComponent implements OnInit {

  @Input() dataInfo: InfoBaseIconModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
