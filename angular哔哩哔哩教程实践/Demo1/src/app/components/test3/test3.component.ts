import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {


  private url: string;
  public baiduResult: string;

  constructor(private http: HttpClient) {
    this.url = "https://013c96d0-96f2-4576-9848-777186a7c3ac.mock.pstmn.io/test";
  }

  ngOnInit() {
  }

  public getResult() {
    this.http.get(this.url).subscribe(result => {
      console.log("hahah"+result);
      this.baiduResult = result.toString();
    })
  }



}
