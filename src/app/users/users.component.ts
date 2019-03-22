import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	users: User[] = [];

  	constructor(private userService: UserService ) { }

  	ngOnInit() {
  		this.getUsers();
 	}

 	getUsers() {
    this.users = [];
    this.userService.getUsers().subscribe((users: User[]) => {
      console.log(users);
      this.users = users;
    });
  }
}
