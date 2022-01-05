import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multipleservers',
  templateUrl: './multipleservers.component.html',
  styleUrls: ['./multipleservers.component.css']
})
export class MultipleserversComponent implements OnInit {
  setserver=false;
  servercreationstate='no server created';
  servername= 'test';
  serverCreated=false;

  constructor() { 
    setTimeout(() => {this.setserver=true;}, 3000);
  }

  ngOnInit(){
  }

  onCreateserver(){
 this.serverCreated=true;
    this.servercreationstate='server created! name is ' +this.servername;
  }

onUpdateservername(event:Event)
{
  this.servername=(<HTMLInputElement>event.target).value;
}
}
