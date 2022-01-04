
import { style } from "@angular/animations";
import { Component } from "@angular/core";
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
  styles:[`h1{
      color:red
  }`]
    
}) /*decorator(pass a js object to configure the decorator)*/
export class serverComponent{
serverid =10;
serverstatus ='conected';
}