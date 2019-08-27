import { Util } from './../util';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})



export class Test2Component implements OnInit {

  public baiduPictureurl: string = "https://www.baidu.com/img/bd_logo1.png?where=super";

  public number1: number = null;

  public number2: number = null;

  public result: number = null;

  public operator: string = null;

  public getResult() {
    this.result = Util.calculate(this.number1, this.number2, this.operator);
    this.number1 = null;
    this.number2 = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
