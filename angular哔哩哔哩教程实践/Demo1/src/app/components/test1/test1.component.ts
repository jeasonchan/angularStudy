import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  public title: string = "我是默认title";

  public creator: string = "jeason_chan";

  public titleNameForDiv: string;

  public htmlContent:string="<p>这一段HTML</p>"

  constructor() {
    this.titleNameForDiv = "我是来自的组件属性的字符串，是div的title";
  }

  ngOnInit() {
  }

}
