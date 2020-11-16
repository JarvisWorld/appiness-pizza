import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BackendCallService } from 'src/app/services/backend-call.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orderForm: FormGroup;
  @Output() public backToOrder: EventEmitter<any> = new EventEmitter();
  constructor(
    private callBackend: BackendCallService,
    private fb: FormBuilder,
  ) { }
  @Input() orderIndex: number;
  getIndex: any;
  ngOnInit(): void {
    var orderList = this.callBackend._getOrderList();
    this.orderForm = this.fb.group(
      {
        'customerName': ['', [Validators.required]],
        'itemName': ['', [Validators.required]],
        'noOfItem': ['', [Validators.required]],
        'price': ['', [Validators.required]],
        'totalAmount': ['', [Validators.required]],
        'address': ['', [Validators.required]]
      }
    );

    var orderInfo = orderList[this.orderIndex];
    this.orderForm.patchValue(
      {
        'customerName': orderInfo.customer_name,
        'itemName': orderInfo.item_name,
        'noOfItem': orderInfo.No_of_item,
        'price': orderInfo.price,
        'totalAmount': (orderInfo.No_of_item * orderInfo.price),
        'address': orderInfo.delivery_address
      }
    );
    this.orderForm.disable();

  }

  _viewOrder() {
    this.backToOrder.emit(false);
  }

}
