import { Component, OnInit } from '@angular/core';
import { Ipass } from 'src/app/module/passanger';
import { PassangerService } from 'src/app/service/passanger.service';

@Component({
  selector: 'app-pass-dash',
  templateUrl: './pass-dash.component.html',
  styleUrls: ['./pass-dash.component.scss'],
})
export class PassDashComponent implements OnInit {
  totalCount!: number;
  checkinCount!: number;
  passwithchild!: number;
  passangerArr: Array<Ipass> = [];
  constructor(private _passService: PassangerService) {}

  ngOnInit(): void {
    this.passangerArr = this._passService.fetchallData();
    this.totalCount = this.passangerArr.length;
    this.getcheckinCount();
    this.getpasswithChild();
  }

  getcheckinCount() {
    this.checkinCount = this.passangerArr.filter(
      (total) => total.checkin
    ).length;
  }

  getpasswithChild() {
    this.passwithchild = this.passangerArr.filter(
      (child) => child.children
    ).length;
  }

  getemitInfo() {
    this.getcheckinCount();
    this.getpasswithChild();
  }
}
