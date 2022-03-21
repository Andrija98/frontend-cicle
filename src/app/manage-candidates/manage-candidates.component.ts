import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faListAlt, faFileAlt, faBell, faCheckCircle, faFileExport, faBorderNone, faShoppingCart, faFlag } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-manage-candidates',
  templateUrl: './manage-candidates.component.html',
  styleUrls: ['./manage-candidates.component.css']
})
export class ManageCandidatesComponent implements OnInit {



  faBorderNone = faBorderNone;
  faShoppingCart = faShoppingCart;
  faBell = faBell;
  faFlag = faFlag;
  faListAlt = faListAlt;
  faFileAlt = faFileAlt;
  faFileExport = faFileExport;
  candidates:any = [];
  faCheckCircle = faCheckCircle;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faTwitter =faTwitter;

  showSidebar = true;

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onToggle(elem: any){
    if(this.showSidebar){
      elem.classList.add('disabled');
      this.showSidebar = false;
    }else{
      elem.classList.remove('disabled');
      this.showSidebar = true;
    }
  }

}
