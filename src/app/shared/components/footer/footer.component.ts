import { Component, OnInit } from '@angular/core';
import { Constants } from '@utils/constants';
import cssVars from 'css-vars-ponyfill';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  //routeMtmPrivacyPolicy = `/${Constants.ROUTE_INFO_MTM}/${Constants.ROUTE_MTM_PRIVACIY_POLICY}`;
  routeMtmPrivacyPolicy = `/${Constants.ROUTE_MTM_PRIVACIY_POLICY}`;

  constructor() { }

  ngOnInit(): void {
    cssVars();
  }

}
