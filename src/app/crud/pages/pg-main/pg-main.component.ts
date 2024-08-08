import { Component } from '@angular/core';
import { CAvatarComponent } from '../../components/c-avatar/c-avatar.component';

@Component({
  selector: 'pg-main',
  standalone: true,
  imports: [CAvatarComponent],
  templateUrl: './pg-main.component.html',
  styleUrl: './pg-main.component.css'
})
export class PgMainComponent {

}
