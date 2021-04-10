import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shy-birds',
  templateUrl: './shy-birds.component.html',
  styleUrls: ['./shy-birds.component.scss']
})
export class ShyBirdsComponent implements OnInit {
  private loadAPI: Promise<any> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.loadScript();
  }

  public loadScript() {
    let node = document.createElement("script");
    node.src = "../../../assets/js/shy-bird.js";
    node.type = "text/javascript";
    node.async = true;
    document.getElementsByTagName("body")[0].appendChild(node);
  }
}