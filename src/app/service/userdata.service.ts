import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url="http://192.168.1.140:3000/students"
  constructor(private http:HttpClient) { }

  postdata(data:any)
  {
    // return this.http.post(this.url,data, {
    //   headers: new HttpHeaders().set('content-type','application/x-www-form-urlencoded')
    // })

    return this.http.post(this.url,data, {
      headers: new HttpHeaders().set('content-type','application/JSON')
    })
  }
}
