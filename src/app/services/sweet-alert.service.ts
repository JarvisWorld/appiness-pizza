import { Injectable } from '@angular/core';
import swal from "sweetalert";

@Injectable({
    providedIn: 'root'
})
export class SweetAlertService {
    constructor() { }

    showMessage(msg: any, type: string) {
        swal("", msg, type);
    }

    confirmAction(title: string, text: string, type: string) {
        return swal({
            'title': title,
            'text': text,
            'icon': type,
            'buttons': ['No', 'Yes'],
            'dangerMode': true,
        }).then((status) => {
            if (status) {
                return true;
            } else {
                return false;
            }
        });
    }

    orderChangeAction() {
        return swal("Click the button to change!", {
            icon: "info",
            buttons: {
                "Order": {
                    text: "Order",
                    value: "order",
                    visible: true,
                    className: "btn btn-outline-primary"
                },
                "Preparing": {
                    text: "Preparing",
                    value: "prepare",
                    visible: true,
                    className: "btn btn-outline-primary"
                },
                "Ready": {
                    text: "Ready",
                    value: "ready",
                    visible: true,
                    closeModal: true,
                    className: "btn btn-outline-success"
                },
                "Cancel": {
                    text: "Cancel",
                    value: "cancel",
                    visible: true,
                    closeModal: true,
                    className: "btn btn-outline-dark"
                }
            }
        });
    }
}
