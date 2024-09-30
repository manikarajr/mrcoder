import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  activeSection: string = 'home'; // Default active section

  constructor(private router: Router, private route: ActivatedRoute) {}

  // Function to scroll to element by id
  scrollToElement(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    this.activeSection = section; // Set clicked section as active
  }

  // Listen to scroll events to detect the current active section
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'skills', 'experience', 'project', 'about', 'contact'];

    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const bounding = element.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.top <= window.innerHeight / 2) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}
