import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap,catchError, map } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';
import { AutocompleteService } from './autocomplete.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public clients: Observable<any[]>;
  private searchTerms = new Subject<string>();
  public ClientName = '';
  public flag: boolean = true;
  title = 'autocomplete';
  constructor(
    private clientSearchService: AutocompleteService,
  ) {}


    ngOnInit(): void {
      this.clients = this.searchTerms.pipe(
        debounceTime(300),       // wait for 300ms pause in events  
        distinctUntilChanged(),   // ignore if next search term is same as previous  
        switchMap(term =>  term  // switch to new observable each time  
          // return the http search observable  
          ? this.clientSearchService.searchData(term)
          : []
        ),
          // or the observable of empty heroes if no search term  
          catchError(error => {
          // TODO: real error handling  
          console.log(error);
          return [];
        }));
    }
    // Push a search term into the observable stream.  
    searchClient(term: string): void {
      this.flag = true;
      this.searchTerms.next(term);
    }
    onselectClient(ClientObj) {
      if (ClientObj.ClientId != 0) {
        this.ClientName = ClientObj.text;
        this.flag = false;
      }
      else {
        return false;
      }
    }
  }
