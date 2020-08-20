import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn = false;
  private token: string;

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(creds: Credentials) {

    return this.http.post(environment.gateway + '/register', creds).subscribe( (response: any) => {
      
      if (response.token !== undefined) {
        
        this.setLoggedIn(true, response.token);

        const userData = { token: this.token, };

        localStorage.setItem('user', JSON.stringify(userData));
        this.router.navigateByUrl('/dashboard');
      }
    });

  }
  
  loginUser(creds: Credentials) {

    return this.http.post(environment.gateway + '/login', creds).subscribe( (response: any) => {

      if (response.token !== undefined) {
        
        this.setLoggedIn(true, response.token);

        const userData = { token: this.token, };

        localStorage.setItem('user', JSON.stringify(userData));
        this.router.navigateByUrl('/dashboard');
      }

    });

  }

  setLoggedIn(loggedIn: boolean, token?: string) {
    this.loggedIn = loggedIn;
    this.token = token;
  }

  getAuthHeader() {
    const header = this.loggedIn ? { Authorization: `Bearer ${this.token}` } : undefined;
    return header;
  }

  getUser() {

    const header = this.getAuthHeader();

    return this.http.get(environment.gateway + '/getUser', {headers: header});
    
  }

  connToodledo(code: string) {

    const header = this.getAuthHeader();

    return this.http.put(environment.gateway + '/connToodledo', {
      body: code,
      headers: header,
    });

  }

  connCloudStorage(cloud: CloudService) {

    const header = this.getAuthHeader();

    return this.http.put(environment.gateway + '/connCloudStorage', {
      body: cloud,
      headers: header,
    }).subscribe( () => {} );

  }

  setBackupFrequency(freq: string) {

    const header = this.getAuthHeader();

    return this.http.put(environment.gateway + '/setBackupFrequency', {
      body: freq,
      headers: header,
    }).subscribe( () => {} );
    
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