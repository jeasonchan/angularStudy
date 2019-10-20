import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }


  public getDate() {
    return new Date();
  }

  public showOne(input: string) {
    console.log(input);
  }

}
