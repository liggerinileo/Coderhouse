import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/User';
import { MoviesService } from 'src/app/service/movies/movies.service';
import { UsersService } from 'src/app/service/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userList: User[] | undefined;
  id: any;
  user: User | undefined;
  admin: boolean | undefined;

  constructor(private userService: UsersService, private moviesService: MoviesService, 
    private router: Router, private modal: NgbModal) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.user = this.userService.getUser();
    if (this.user?.isAdmin) {
      this.admin = true;
    }
    let today = new Date().toDateString();
    this.userService.getAll().subscribe(users => {
      console.log(users);
      this.userList = users?.users;

    }, error => {
      if(error == "Token invalido" || error == "No hay token") {
        alert("Ha expirado el tiempo de sesión");

      } else {
        console.log(error);
        alert(error?.error?.message);

      }

    });
  }

  userDetails(user: User) {
    this.userService.setUser(user);
    this.router.navigate(['/user']);
  }

  makeOrTakeAdmin(user: User, id: string | undefined, admin: boolean) {
    user.isAdmin = admin;
    this.userService.edit(user, id).subscribe(res => {
      console.log(res);
      this.load();

    }, error => {
      user.isAdmin = false;
      if(error == "Token invalido" || error == "No hay token") {
        alert("Ha expirado el tiempo de sesión");

      } else {
        console.log(error);
        alert(error?.error?.message);

      }
    });
  }

  openModal(content: any, id: any) {
    this.id = id;
    let options: NgbModalOptions = {
      centered: true,
      backdrop: 'static',
      keyboard: false,
    };
    this.modal.open(content, options);
  }

  delete() {
    this.userService.delete(this.id).subscribe(res => {
      this.dismiss();
      this.load();

    }, error => {
      if(error == "Token invalido" || error == "No hay token") {
        alert("Ha expirado el tiempo de sesión");

      } else {
        console.log(error);
        alert(error?.error?.message);

      }
    });
  }

  dismiss() {
    this.modal.dismissAll();
  }

}
