import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  user: any = {};
  current: any = {};
  data: any = {};

  constructor() {
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('Users') as string);
  }

  // @ts-ignore
  // tslint:disable-next-line:typedef
  delete(index) {
    if (index) {
      console.log(index);
      this.user.splice(index);
      localStorage.setItem('Users', JSON.stringify(this.user).toString());
    } else {
      this.user = localStorage.removeItem('Users');
    }
    // @ts-ignore

  }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  update(index) {
    this.data = JSON.parse(localStorage.getItem('Users') as string);
    console.log(this.data);

    // tslint:disable-next-line:no-conditional-assignment
    if (index !== -1) {

      const formData = this.data[index];
      this.current = formData;
      console.log(formData);

    }
  }
  // tslint:disable-next-line:typedef
  edit(){
    // this.user =  localStorage.setItem('Users', JSON.stringify(this.current));
  }
}
