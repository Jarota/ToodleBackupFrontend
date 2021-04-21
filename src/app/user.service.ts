import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(creds: Credentials) {

    return this.http.post(environment.gateway + '/register', creds).subscribe( (response: any) => {
      
      if (response.token !== undefined) {
        
        const userData = { token: response.token, };

        localStorage.setItem('user', JSON.stringify(userData));
        this.router.navigateByUrl('/dashboard');
      }
    });

  }
  
  loginUser(creds: Credentials) {

    return this.http.post(environment.gateway + '/login', creds).subscribe( (response: any) => {

      if (response.token !== undefined) {

        const userData = { token: response.token, };

        localStorage.setItem('user', JSON.stringify(userData));
        this.router.navigateByUrl('/dashboard');
      }

    });

  }

  getAuthHeader() {

    const token = JSON.parse(localStorage.getItem('user')).token;
    return { Authorization: `Bearer ${token}` };
    
  }

  getUser() {

    const header = this.getAuthHeader();
    return this.http.get(environment.gateway + '/getUser', {headers: header});
    
  }

  connToodledo(code: Code) {

    const header = this.getAuthHeader();

    return this.http.put(environment.gateway + '/connToodledo', code, {headers: header});

  }

  connDropbox(code: Code) {

    const header = this.getAuthHeader();

    return this.http.put(environment.gateway + '/connDropbox', code, {headers: header});

  }

  setBackupFrequency(freq: string) {

    const header = this.getAuthHeader();

    return this.http.put(environment.gateway + '/setBackupFrequency', freq, {headers: header})
      .subscribe( () => {} );
    
  }

  getRandomString() {
    
    const header = this.getAuthHeader();

    return this.http.get(environment.gateway + '/randomString', {headers: header});
  
  }

}

export class Credentials {
  username: string;
  password: string;
}

export class ToodleInfo {
  token: string;
  refresh: string;
  toBackup: string[];
}

export class CloudService {
  name: string;
  token: string;
}

export class Code {
  value: string;
}