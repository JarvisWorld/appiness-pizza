import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

import { BackendCallService } from './services/backend-call.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appi-pizza';

  showOrder: boolean = false;
  orderList = [{ "customer_name": "Santhosh M", "No_of_item": "4", "item_name": "Margherita - Regular", "price": "99.99", "delivery_address": "Santhosh, Delivery address", "status": "order", "title": "Order Received" }, { "customer_name": "Sudhakar M", "No_of_item": "3", "item_name": "Farmhouse - Medium", "price": "399.00", "delivery_address": "Sudhakar, Delivery address", "status": "order", "title": "Order Received" }, { "customer_name": "Shailesh", "No_of_item": "2", "item_name": "Veg Extravaganza - Large", "price": "699.00", "delivery_address": "Shailesh, Delivery address", "status": "prepare", "title": "Order Preparing" }, { "customer_name": "Kavi M", "No_of_item": "4", "item_name": "Pepper Barbecue Chicken - Medium", "price": "399.00", "delivery_address": "Kavi, Delivery address", "status": "prepare", "title": "Order Preparing" }, { "customer_name": "Test Name", "No_of_item": "2", "item_name": "Chicken Sausage - Large", "price": "499.00", "delivery_address": "Delivery address of test name", "status": "ready", "title": "Ready to serve" }];
  inputString = "Parent input";

  constructor(
    private spinner: NgxSpinnerService,
    private callBackend: BackendCallService
  ) {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.callBackend._setOrderList(this.orderList);
  }

  selectedIndex: number;
  _getEventIndex(event: any) {
    this.showOrder = true;
    this.selectedIndex = event;
  }

  _backToOrder(event) {
    this.showOrder = false;
  }
}
