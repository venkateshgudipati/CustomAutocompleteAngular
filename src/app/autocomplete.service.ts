import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';  


@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {
  endPoint:string='http://192.168.0.182:801/api/LookUp/PostCodesSuburbs'
  constructor(private httpClient:HttpClient) { }


  searchData(term:string): Observable<any[]>{
   return this.httpClient.get<any[]>(this.endPoint + '?searchText=' + term);  
  }


}
