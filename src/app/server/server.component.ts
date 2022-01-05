
import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { EMPTY } from "rxjs";
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
  styles:[`h1{
      color:red
  }`,`.connected{color:white}`,],
  styleUrls:['./server.component.css'],
    
}) /*decorator(pass a js object to configure the decorator)*/
export class serverComponent{
serverid =10;
serverstatus ='conected';
nameentered='';
resetname :string='' ;
showSecret=false;
 log=[0];
x=0;

Onentername(event:Event)
{
this.nameentered=(<HTMLInputElement>event.target).value;
}
constructor()
{
 this.serverstatus=Math.random()>0.5 ?'connected':'not connected';

}
getcolor()
{
   return this.serverstatus=== 'connected' ? 'green' : 'red'; 
}

onreset()
{
  
 this.nameentered='';
}

onToggle()
{
this.showSecret =!this.showSecret;
this.log.push(this.log.length);

 

}

}