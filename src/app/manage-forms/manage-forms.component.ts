import { Component, OnInit } from '@angular/core';
import { Candidate } from '../manage-candidates/candidates-list/candidate.model';
import { CandidatesService } from '../manage-candidates/candidates.service';

import { faPen, faTrashAlt, faChevronLeft, faChevronRight, faFileExport, faFileAlt, faListAlt, faBell, faBorderNone, faShoppingCart, faFlag  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-forms',
  templateUrl: './manage-forms.component.html',
  styleUrls: ['./manage-forms.component.css']
})
export class ManageFormsComponent implements OnInit {
  faPen = faPen;
  faTrashAlt = faTrashAlt;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faBorderNone = faBorderNone;
  faShoppingCart = faShoppingCart;
  faFlag = faFlag;
  faBell = faBell;
  faListAlt = faListAlt;
  faFileAlt = faFileAlt;
  faFileExport = faFileExport;


  candidates:any = []
  constructor(private cadidateService: CandidatesService) { }

  ngOnInit(): void {
    this.cadidateService.pullCandidate().subscribe( resData => {
    
      this.candidates = resData;
    }

    )
  }

}
