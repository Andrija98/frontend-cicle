import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, tap } from "rxjs";
import { User } from "./user.model";

export interface AuthData{
    idToken: string;
    email: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    user = new Subject<User>();
    constructor(private http: HttpClient){}

    signUp(email: string, password: string){
        return this.http.post<AuthData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASMQW5jx0GYcbXQ26rc-_GdtFVpZsXg90',{
            email: email,
            password: password,
            returnSecureToken: true
        });
    }

    login(email: string, password: string){
        return this.http.post<AuthData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyASMQW5jx0GYcbXQ26rc-_GdtFVpZsXg90',{
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(tap( resData => {
            const expiresInTime = new Date(new Date().getTime() + +resData.expiresIn * 1000);
            const user = new User(resData.email, resData.localId, resData.idToken, expiresInTime )
            this.user.next(user);
        }));
    }



}