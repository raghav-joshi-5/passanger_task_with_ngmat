import { Injectable } from '@angular/core';
import { Ipass } from '../module/passanger';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class PassangerService {
  constructor(private _snackBar: SnackbarService) {}
  passangerArr: Array<Ipass> = [
    {
      id: '1',
      fullname: 'John Doe',
      checkin: true,
      checkindate: 1672531200000,
      children: [
        { name: 'Alice Doe', age: 5 },
        { name: 'Bob Doe', age: 7 },
      ],
    },
    {
      id: '2',
      fullname: 'Jane Smith',
      checkin: false,
      checkindate: null,
      children: null,
    },
    {
      id: '3',
      fullname: 'Michael Brown',
      checkin: true,
      checkindate: 1672617600000,
      children: [{ name: 'Charlie Brown', age: 6 }],
    },
    {
      id: '4',
      fullname: 'Emily Davis',
      checkin: true,
      checkindate: 1672704000000,
      children: [
        { name: 'Sophia Davis', age: 8 },
        { name: 'Liam Davis', age: 3 },
      ],
    },
    {
      id: '5',
      fullname: 'Daniel Wilson',
      checkin: false,
      checkindate: null,
      children: null,
    },
    {
      id: '6',
      fullname: 'Sarah Johnson',
      checkin: true,
      checkindate: 1672790400000,
      children: [{ name: 'Emma Johnson', age: 4 }],
    },
    {
      id: '7',
      fullname: 'Chris Lee',
      checkin: false,
      checkindate: null,
      children: null,
    },
    {
      id: '8',
      fullname: 'Patricia Martinez',
      checkin: true,
      checkindate: 1672876800000,
      children: [
        { name: 'Isabella Martinez', age: 2 },
        { name: 'Lucas Martinez', age: 5 },
      ],
    },
    {
      id: '9',
      fullname: 'Andrew Garcia',
      checkin: true,
      checkindate: 1672963200000,
      children: null,
    },
    {
      id: '10',
      fullname: 'Linda Walker',
      checkin: false,
      checkindate: null,
      children: [{ name: 'Oliver Walker', age: 3 }],
    },
  ];

  fetchallData(): Array<Ipass> {
    return this.passangerArr;
  }

  onRemove(remove: string) {
    let removeId = this.passangerArr.findIndex(
      (removeInd) => removeInd.id === remove
    );
    let passObj = this.passangerArr[removeId].fullname;
    this.passangerArr.splice(removeId, 1);
    this._snackBar.opensnackBar(`the ${passObj} is removed successfully`);
  }

  updatedpassName(passId: string, updatedpassName: string) {
    let getIndex = this.passangerArr.findIndex(
      (getindex) => getindex.id === passId
    );
    let passoldname = this.passangerArr[getIndex].fullname;
    this.passangerArr[getIndex].fullname = updatedpassName;
    this._snackBar.opensnackBar(
      `the passanger ${passoldname} is updated to ${updatedpassName}`
    );
  }
}
