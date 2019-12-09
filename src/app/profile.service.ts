import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
 private client_id = "9b7de0eb2b0f0a0bae15";
  private client_secret ="349a7f4cdf273026351c27d56876f2504f8c76b2";
  constructor(private http:HttpClient) { 
    this.username = "justusm10moringaschool";
     }
      getProfileInfo(){
      return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
     }
     getProfileRepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
    }
     updateProfile(username:string){
    this.username = username;
     }

}