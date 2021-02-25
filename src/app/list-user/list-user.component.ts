import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../authservice.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  user: any = {};
  current: any = {};
  data: any = {};

  constructor(private authservice: AuthserviceService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('Users') as string);
  }

  // @ts-ignore
  // tslint:disable-next-line:typedef
  delete(index){
      this.user.splice(index, 1);
      localStorage.setItem('Users', JSON.stringify(this.user).toString());
  }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  update(index) {
    this.data = JSON.parse(localStorage.getItem('Users') as string);

    // tslint:disable-next-line:no-conditional-assignment
    if (index !== -1) {

      const formData = this.data[index];
      this.current = formData;

    }
  }
  // tslint:disable-next-line:typedef
  edit(){
    this.current = localStorage.setItem('Users', JSON.stringify(this.data));
  }
}
