import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';
import { DotComponent } from '../dot/dot.component';
import { StatusComponent } from '../status/status.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, DotComponent, StatusComponent, FooterComponent],
})
export class ContentComponent {}
