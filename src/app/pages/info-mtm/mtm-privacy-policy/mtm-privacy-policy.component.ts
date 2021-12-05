import { Component, OnInit } from '@angular/core';
import { UtilsService } from '@services/utils.service';
import { InfoIconModel } from '@models/index';

@Component({
  selector: 'app-mtm-privacy-policy',
  templateUrl: './mtm-privacy-policy.component.html',
  styleUrls: ['./mtm-privacy-policy.component.scss']
})
export class MtmPrivacyPolicyComponent implements OnInit {

  infoIconMtM: InfoIconModel = new InfoIconModel();

  constructor(private utilService: UtilsService) { }

  ngOnInit(): void {
    this.infoIconMtM = this.utilService.getIconMtm();
  }

}
