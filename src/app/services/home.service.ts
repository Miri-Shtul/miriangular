import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { ResultList } from '../models/resultLists';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
routeUrl:`https://localhost:7057/api/Person`

  constructor(public httpClient:HttpClient) { }
  post(myForm:File){
    return this.httpClient.post<ResultList>(this.routeUrl,myForm)
  }
}
