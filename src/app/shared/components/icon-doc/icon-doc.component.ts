import { Component, OnInit, Input } from '@angular/core';
import { InfoDeveloperModel } from '@app/core/models';

@Component({
  selector: 'app-icon-doc',
  templateUrl: './icon-doc.component.html',
  styleUrls: ['./icon-doc.component.scss']
})
export class IconDocComponent implements OnInit {

  @Input() dataInfo: InfoDeveloperModel = new InfoDeveloperModel();

  constructor() { }

  ngOnInit(): void {
  }

}
