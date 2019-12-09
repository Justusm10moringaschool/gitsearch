import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
 private client_id = "";
  private client_secret ="";
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