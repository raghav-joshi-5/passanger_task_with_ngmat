import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss'],
})
export class RemoveComponent implements OnInit {
  onConfirm(arg0: boolean) {
    this._matDialog.close(arg0);
  }

  constructor(private _matDialog: MatDialogRef<RemoveComponent>) {}

  ngOnInit(): void {}
}
