import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dot.component.html',
  styleUrl: './dot.component.css',
})
export class DotComponent {
  @Input({ required: true }) public type: string = '';
}
