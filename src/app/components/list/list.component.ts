import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'weincode-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products: any[] = []

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.listService.getProducts()
      .subscribe(resp => this.products = resp)
      console.log(this.products)
  }

}
