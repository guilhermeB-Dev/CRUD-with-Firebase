import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { ServicesDataService } from 'src/app/services/services-data.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/modules/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  products: Observable<any>;

  constructor(
    private _servicesService: ServicesService,
    private _servicesDataService: ServicesDataService
  ) {}

  ngOnInit() {
    this.products = this._servicesService.getAll();
  }

  delete(key: string) {
    this._servicesService.dalete(key);
  }

  edit(product: Product, key: string) {
    this._servicesDataService.obtemProduct(product, key);
  }
}
