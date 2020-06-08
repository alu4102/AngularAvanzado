import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  providers: [UserService],
  animations: [fadeIn]
})

export class keepersComponent implements OnInit {
  public title: string;
  public keepers: User[];
  public url: string;

  constructor(private _userService: UserService) {
    this.title = 'Keepers';
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log('keepers.component loaded');
    this.getKeepers();
  }

  getKeepers() {
    this._userService.getKeepers().subscribe(
      (response: any) => {
        if (!response.users) {

        }
        else {
          this.keepers = response.users;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
