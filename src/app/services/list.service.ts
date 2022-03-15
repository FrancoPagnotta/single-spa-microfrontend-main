import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get("https://dummyjson.com/products")
      .pipe(
        map(
          (resp: any) => {
            return resp.products
          }
        )
      )
  }
}
