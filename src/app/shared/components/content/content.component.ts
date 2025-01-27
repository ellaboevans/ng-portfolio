import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';
import { DotComponent } from '../dot/dot.component';
import { StatusComponent } from '../status/status.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectsComponent } from '../projects/projects.component';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { ProjectCardInterface } from '../../interfaces/project-card.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SectionHeadingComponent,
    DotComponent,
    StatusComponent,
    FooterComponent,
    ProjectsComponent,
    CardComponent,
    CommonModule,
  ],
})
export class ContentComponent {
  public readonly project_card = signal<ProjectCardInterface[]>([
    {
      id: 1,
      name: 'JED Event',
      description: 'Event & Ticketing management platform',
      url: 'https://jed-event.com',
      image: '/assets/images/jed.png',
    },
    {
      id: 2,
      name: 'Campus Oracle, Knust',
      description: 'Campus Counselling Application',
      url: 'https://campus-oracle.vercel.app',
      image: '/assets/images/campus_oracle.png',
    },
    {
      id: 3,
      name: 'REFHUB',
      description: 'Graduate Reference System for KNUST',
      url: 'https://refhub.knust.edu.gh',
      image: '/assets/images/refhub.png',
    },
    {
      id: 3,
      name: 'Akoma Homecare & Rehabilitation',
      description: 'Job listing App for an American Company',
      url: 'https://akomahmc.org/',
      image: '/assets/images/akoma-2.png',
    },
  ]);

  public readonly community_card = signal<ProjectCardInterface[]>([
    {
      id: 1,
      name: 'AmaliTech',
      description: 'A global tech and service company based in Europe',
      url: 'https://amalitech.com',
      image: '/assets/images/amalitech.png',
    },
    {
      id: 2,
      name: 'SlightlyTechie Network',
      description: 'A community of software engineers and students techies',
      url: 'https://www.slightlytechie.com/',
      image: '/assets/images/st.png',
    },
    {
      id: 3,
      name: 'Google Developer Student Clubs',
      description: 'A community of students techies in Knust',
      url: 'https://dsc-knust.web.app/',
      image: '/assets/images/dsc.png',
    },
  ]);

  public trackProject(index: number, project: ProjectCardInterface) {
    return project.id;
  }
}
