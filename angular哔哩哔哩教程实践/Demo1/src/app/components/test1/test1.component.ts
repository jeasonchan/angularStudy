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

  public htmlContent: string = "<p>这一段HTML</p>"

  public array: any[] = [
    {
      name: "港独",
      nick_name: "傻逼",
      characters:["死全家","骨灰拌饭","坟头蹦迪"]
    },
    {
      name: "台独",
      nick_name: "傻逼",
      characters:["死全家","骨灰拌饭","坟头蹦迪"]
    },
    {
      name: "藏独",
      nick_name: "傻逼",
      characters:["死全家","骨灰拌饭","坟头蹦迪"]
    }];

  constructor() {
    this.titleNameForDiv = "我是来自的组件属性的字符串，是div的title";
  }

  ngOnInit() {
  }

}
