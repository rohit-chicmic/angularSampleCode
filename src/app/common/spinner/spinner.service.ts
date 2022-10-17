import { Injectable } from "@angular/core";
import {NgxSpinnerService} from 'ngx-spinner'
@Injectable({
    providedIn:'root'
})
export class SpinnerService{
    constructor(
        private spinner:NgxSpinnerService 
    ){}

    showSpinner(){
        this.spinner.show()
    }

    HideSpinner(){
        this.spinner.hide();
    }
}
