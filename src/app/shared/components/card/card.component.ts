import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProjectCardInterface } from '../../interfaces/project-card.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ev-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [CommonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input({ required: true }) cardData: ProjectCardInterface | null = null;
}
