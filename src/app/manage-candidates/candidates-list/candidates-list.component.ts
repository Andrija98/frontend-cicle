import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Subscription, take } from 'rxjs';
import { CandidatesService } from '../candidates.service';
import { Candidate } from './candidate.model';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit, OnDestroy {
  routePath = 'Home/Candidate List';
  candidates:any = [];
  addCandidate = false;
  faCheckCircle = faCheckCircle;

  constructor(private candidatesService: CandidatesService, private router: Router) { }

  ngOnInit(): void {
    this.candidatesService.pullCandidate().subscribe( resData => {
      this.candidates = resData;
      console.log(resData);
      
     }
    );
  }

  onSubmit(form: NgForm){
    console.log(form);
    const candidate: Candidate = new Candidate(form.value.firstName, form.value.lastName, form.value.city, form.value.state, form.value.dateOfBirth, form.value.phoneNum, form.value.email, form.value.gender);
    
    this.candidatesService.saveCandidate(candidate).subscribe(resData => {
      console.log(resData)
    })
    

    this.addCandidate = false;
    this.router.navigate(['manage/candidate-list']);

  }

  onAddCandidate(){
    this.addCandidate = !this.addCandidate; 
  }

  ngOnDestroy(){

  }

}
