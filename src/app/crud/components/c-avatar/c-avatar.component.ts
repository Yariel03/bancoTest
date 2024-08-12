import { Component, Input, input } from '@angular/core';
import { Utils } from '../../../utils/utils';

@Component({
  selector: 'c-avatar',
  standalone: true,
  imports: [],
  templateUrl: './c-avatar.component.html',
  styleUrl: './c-avatar.component.css',
})
export class CAvatarComponent {
  avatarUrl: string = '';
  @Input()
  set avatar(value: string) {
    if (value) {
      this.avatarUrl = Utils.CapitalLeters(value);
    } else {
      this.avatarUrl = 'NA';
    }
  }
}
