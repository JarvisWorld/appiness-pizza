import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SweetAlertService } from '../../services/sweet-alert.service';
import { BackendCallService } from 'src/app/services/backend-call.service';
import { Router } from '@angular/router';
@Component({
  selector: 'order-list',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Output() public outputIndex: EventEmitter<any> = new EventEmitter();
  orderList = [];
  constructor(
    private alert: SweetAlertService,
    private callBackend: BackendCallService,
    private router: Router
  ) { }

  ngOnInit() {

   
    this.orderList = this.callBackend._getOrderList();
  }

  showDiv = false;
  _viewOrder(index) {
    this.outputIndex.emit(index);
  }

  _changeOrderStatus(index) {
    var titleMsg = { "order": "Order Received", "prepare": "Order Preparing", "ready": "Order Ready"}
    this.alert.orderChangeAction().then((result: any) => {
      if (result != "cancel") {
        this.orderList[index]['status'] = result;
        this.orderList[index]['title'] = titleMsg[result];
        this.alert.showMessage("Order status updated", "success");
      }
      return false;
    });
  }
}
