import { Component } from '@angular/core';
import { HomeComponent } from "../../Screens/home/home.component";
import { SkillComponent } from "../../Screens/skill/skill.component";
import { ExperienceComponent } from "../../Screens/experience/experience.component";
import { ProjectSectionComponent } from "../../Screens/project-section/project-section.component";
import { AboutComponent } from "../../Screens/about/about.component";
import { ContactComponent } from "../../Screens/contact/contact.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-master-view',
  standalone: true,
  imports: [HomeComponent, SkillComponent, ExperienceComponent, ProjectSectionComponent, AboutComponent, ContactComponent],
  templateUrl: './master-view.component.html',
  styleUrl: './master-view.component.css'
})
export class MasterViewComponent {
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToElement(fragment);
      }
    });
  }

  private scrollToElement(elementId: string): void {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'instant', block: 'start', inline: 'nearest' });
      }
    }, 100);
  }
}
