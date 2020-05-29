import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sync',
  templateUrl: './sync.page.html',
  styleUrls: ['./sync.page.scss'],
})
export class SyncPage implements OnInit {

  constructor() { }

  public successHide: boolean = false;
  ngOnInit() {
    this.successHide = false;
  }

  public loaderHide: boolean = false;
  
  forceSync(){
this.loaderHide = true;

setTimeout(() =>{ this.loaderHide = false;this.showNewDiv();}, 3000);
//this.showNewDiv();

  }
  showNewDiv(){
this.successHide = true;
setTimeout(() =>{ this.successHide = false}, 1500);
  }

}
