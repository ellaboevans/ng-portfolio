import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  public isDarkMode = signal<boolean>(false);
  public readonly navItems$ = new BehaviorSubject([
    {
      name: 'Home',
      path: '/home',
      icon: './assets/icons/home.svg',
    },
    {
      name: 'About',
      path: '/about',
      icon: './assets/icons/user-circle.svg',
    },
    {
      name: 'Projects',
      path: '/projects',
      icon: './assets/icons/window.svg',
    },
    {
      name: 'Products',
      path: '/products',
      icon: './assets/icons/bag.svg',
    },
  ]);

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  public readonly icons = {
    moon: './assets/icons/moon.svg',
    sun: './assets/icons/sun.svg',
  };

  public trackByPath(index: number, item: any) {
    return item.path;
  }

  public toggleTheme(): void {
    this.isDarkMode.update((value) => !value);
    this.changeTheme();
  }

  private changeTheme(): void {
    if (this.isDarkMode()) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }
}
