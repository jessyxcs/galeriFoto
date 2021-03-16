import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  number = 0;
  userNumber = 0;
  match = false;

  constructor() {}

  ngOnInit() {
    this.number = Math.floor(Math.random() * 9) + 1;
    console.log(this.number);
  }

  check() {
    if (this.number == this.userNumber) {
      this.match = true;
      console.log(this.match);
    } else {
      console.log(this.match);
    }
  }
}
