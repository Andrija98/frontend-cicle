import { Component, OnInit } from '@angular/core';

import { faSearch, faEye, faFileExport, faFileAlt, faListAlt, faBell, faFlag, faShoppingCart, faPen, faBorderNone, faChevronRight, faChevronLeft, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CandidatesService } from '../manage-candidates/candidates.service';


@Component({
  selector: 'app-review-forms',
  templateUrl: './review-forms.component.html',
  styleUrls: ['./review-forms.component.css']
})
export class ReviewFormsComponent implements OnInit {
  candidates:any = [];
  faPen = faPen;
  faTrashAlt = faTrashAlt;
  faSearch = faSearch;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faBorderNone = faBorderNone;
  faShoppingCart = faShoppingCart;
  faFlag = faFlag;
  faEye = faEye;
  faBell = faBell;
  faListAlt = faListAlt;
  faFileAlt = faFileAlt;
  faFileExport = faFileExport;

  constructor(private candidatesService: CandidatesService) { }

  ngOnInit(): void {
    this.candidatesService.pullCandidate().subscribe( resData => {
      this.candidates = resData;
    })
  }

}
