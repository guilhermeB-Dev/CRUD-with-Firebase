import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { ServicesDataService } from 'src/app/services/services-data.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/modules/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  products: Observable<any>;
  product: Product;
  key: string = '';

  constructor(
    private _servicesService: ServicesService,
    private _servicesDataService: ServicesDataService,
    private router: Router 
  ) {}

  ngOnInit() {
    this.products = this._servicesService.getAll();
  }

  delete(key: string) {
    this._servicesService.dalete(key);
  }

  edit(product: Product, key: string) {
    this._servicesDataService.obtemProduct(product, key);
    this.router.navigate(['edit']);
  }

  goToAddProduct() {
    this._servicesDataService.clear();
    this.router.navigate(['edit']);

  }
}
