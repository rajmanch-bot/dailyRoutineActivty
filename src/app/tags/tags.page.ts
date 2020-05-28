import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.page.html',
  styleUrls: ['./tags.page.scss'],
})
export class TagsPage implements OnInit {


  public tags = [ 
   'Do the laundry','Have water','Breal for lunch','Go to Bed','Exercise','Have breakfast','Have Lunch','Read the news'
,'Start your work','Have Water','Take Medicine','Sweep the floor'];


  constructor() { }

  ngOnInit() {
  }

}
