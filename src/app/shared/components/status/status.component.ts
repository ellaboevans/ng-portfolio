import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DotComponent } from "../dot/dot.component";

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [DotComponent],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusComponent {
  @Input({ required: true }) public status: string = '';
}
