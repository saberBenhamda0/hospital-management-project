import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';


interface RegisterEmailInterface {
  email:string,
  password:string,
  confirm_password:string
}

interface RegisterEmailResponse { 
  message:string
}

interface RegisterUserInterface{
  user_id :number,
  first_name :string,
  second_name : string,
  phone_number : string,
  gender: string,
  profile_picture : string 
}

interface RegisterUserSuccessResponse {
  access:string,
  refresh:string
}
interface RegisterUserFailedResponse {
  message:string
}

interface LoginInterface{
  email:string,
  password:string,
}

interface LoginFailedInterface {
  message:string
}

@Injectable({
  providedIn: 'root'
})
export class Auth {

  BACKEND_URL :string = environment.baseUrl;

  constructor(private http:HttpClient){}

  register_email(registerEmailForm : RegisterEmailInterface) : Observable<RegisterEmailResponse> {
    return this.http.post<RegisterEmailResponse>(`${this.BACKEND_URL}/api/auth/register/email`, registerEmailForm)
  }

  register_user(regitserUserForm : RegisterUserInterface) : Observable<RegisterUserSuccessResponse | RegisterUserFailedResponse> {
    return this.http.post<RegisterUserSuccessResponse | RegisterUserFailedResponse>(`${this.BACKEND_URL}/api/auth/register/user`, regitserUserForm)
  }

  login(loginForm : LoginInterface) : Observable<RegisterEmailResponse> {
    return this.http.post<RegisterEmailResponse>(`${this.BACKEND_URL}/api/auth/login`, loginForm)
  }
  
}
