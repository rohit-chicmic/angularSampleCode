import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './common/spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular12BoilerPlate';
  constructor(private spinnerService: SpinnerService) { }
  ngOnInit() {
    // this.spinnerService.showSpinner();
  }
}
