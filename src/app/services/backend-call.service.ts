import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendCallService {

  orderList;
  constructor() { 
    this.orderList = [];
  }

  _setOrderList(orders: object) {
    this.orderList = orders;
  }

  _getOrderList() {
    return this.orderList;
  }
}
