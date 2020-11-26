import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  Role = Role;

  constructor() { }

  ngOnInit(): void {
  }

}
