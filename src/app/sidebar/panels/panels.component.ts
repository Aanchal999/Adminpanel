import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {

  constructor() { }

  userList:Array<any> = JSON.parse(localStorage.getItem('Users')||'{}');
  username:string = (localStorage.getItem('username')||'{}');

  ngOnInit(): void {
  }
  form_el=[{'item1':'','item2':'','item3':'','item4':'','item5':'','item6':'','item7':'','item8':'Himachal Pradesh','item9':'','item10':'','item11':''}]
  result:any=[{}];

}
