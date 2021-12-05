import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InfoDeveloperModel, InfoProjectModel, InfoIconModel } from '@models/index';
import cssVars from 'css-vars-ponyfill';

@Component({
  selector: 'app-icon-project',
  templateUrl: './icon-project.component.html',
  styleUrls: ['./icon-project.component.scss']
})
export class IconProjectComponent implements OnInit {

  @Input() dataInfo: InfoProjectModel = new InfoProjectModel(
    '', new InfoDeveloperModel('', '', [new InfoIconModel()]));

  constructor(public router: Router) {
    cssVars();
  }

  ngOnInit(): void {}

  navigateTo(url: InfoIconModel): void {
    if (url.external) {
      window.open(url.href, '_blank');
    } else {
      this.router.navigateByUrl(url.href);
    }
 }
}
