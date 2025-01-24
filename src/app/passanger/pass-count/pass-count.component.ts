import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-count',
  templateUrl: './pass-count.component.html',
  styleUrls: ['./pass-count.component.scss'],
})
export class PassCountComponent implements OnInit {
  @Input() getcheckincount!: number;
  @Input() gettotalCheckin!: number;
  @Input() passwithchild!: number;
  constructor() {}

  ngOnInit(): void {}
}
