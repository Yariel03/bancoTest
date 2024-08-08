import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'c-avatar',
  standalone: true,
  imports: [],
  templateUrl: './c-avatar.component.html',
  styleUrl: './c-avatar.component.css'
})
export class CAvatarComponent {
  avatarUrl: string='';
  @Input()
  set avatar(value: string) {
if (value) {
  this.avatarUrl = value;
}else{
  this.avatarUrl = 'NA';
}
  } 
}
