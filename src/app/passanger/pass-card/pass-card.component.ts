import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ipass } from 'src/app/module/passanger';
import { RemoveComponent } from '../remove/remove.component';
import { PassangerService } from 'src/app/service/passanger.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss'],
})
export class PassCardComponent implements OnInit {
  @ViewChild('passName') passName!: ElementRef;

  condition!: true;

  @Input() passObj!: Ipass;

  @Output() emitpassInfo: EventEmitter<Ipass> = new EventEmitter<Ipass>();

  isHide: boolean = false;

  onRemove(removeId: string) {
    let removePassRef = this._matDialog.open(RemoveComponent);
    removePassRef.afterClosed().subscribe((res) => {
      if (res) {
        this._passService.onRemove(removeId);
        this.emitpassInfo.emit(this.passObj);
      }
    });
  }

  onDone(): void {
    this.isHide = false;
  }

  onEdit(): void {
    this.isHide = true;
  }
  
  onUpdate() {
    let updatedpassName = this.passName.nativeElement.value;
    this._passService.updatedpassName(this.passObj.id, updatedpassName);
  }

  constructor(
    private _matDialog: MatDialog,
    private _passService: PassangerService
  ) {}

  ngOnInit(): void {}
}
