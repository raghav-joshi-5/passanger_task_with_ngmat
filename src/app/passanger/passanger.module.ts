import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassCardComponent } from './pass-card/pass-card.component';
import { PassDashComponent } from './pass-dash/pass-dash.component';
import { PassCountComponent } from './pass-count/pass-count.component';
import { RemovedialogComponent } from './removedialog/removedialog.component';
import { MaterialModule } from '../material/material/material.module';
import { RemoveComponent } from './remove/remove.component';

@NgModule({
  declarations: [
    PassCardComponent,
    PassDashComponent,
    PassCountComponent,
    RemovedialogComponent,
    RemoveComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [PassDashComponent],
})
export class PassangerModule {}
