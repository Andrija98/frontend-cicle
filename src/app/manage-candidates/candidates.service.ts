import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Candidate } from "./candidates-list/candidate.model";

interface getCandidatedata{
    city?: string;
    dayOfBirth?: Date;
    email:string;
    firstName:string;
    lastName:string;
    phone: number;
    state?: string;
}

@Injectable({
    providedIn: 'root'
})
export class CandidatesService{
    constructor( private http: HttpClient){}


    saveCandidate(candidate: any){
        return this.http.post('https://ng-frontend-examroom-default-rtdb.firebaseio.com/candidate.json', candidate);
    }

    pullCandidate(){
        return this.http.get<{[key:string]: getCandidatedata}>('https://ng-frontend-examroom-default-rtdb.firebaseio.com/candidate.json')
                .pipe(map((resData) => {
                    const arrCandidates = [];    
                    for(let key in resData){
                        arrCandidates.push(resData[key]);
                    }
                    return arrCandidates;
            }));
    }
    
}