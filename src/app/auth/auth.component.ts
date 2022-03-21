import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLogin = false;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitch(){
    this.isLogin = !this.isLogin;
  }
  onSubmit(form: NgForm){
    const email: string = form.value.email;
    const password: string = form.value.password;

    if(this.isLogin){
      const email: string = form.value.email;
      const password: string = form.value.password;
      this.authService.login(email, password).pipe(take(1)).subscribe( resData => {
        this.router.navigate(['manage/candidate-list']);
        console.log(resData);
      });
    }else{
      this.authService.signUp(email, password).pipe(take(1)).subscribe( resData => {
        this.isLogin = true; 
        console.log(resData);
      })
    }
   

    console.log(form);
  }

}
