import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lion-chill",
  templateUrl: "./lion-chill.component.html",
  styleUrls: ["./lion-chill.component.scss"],
})
export class LionChillComponent implements OnInit {
  private loadAPI: Promise<any> | undefined;

  constructor() {}

  ngOnInit(): void {
    this.loadScript();
  }

  public loadScript() {
    let node = document.createElement("script");
    node.src = "../../../assets/js/lion-chill.js";
    node.type = "text/javascript";
    node.async = true;
    document.getElementsByTagName("body")[0].appendChild(node);
  }
}
