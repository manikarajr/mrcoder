import { RouterModule, Routes } from '@angular/router';
import { MasterViewComponent } from './View/master-view/master-view.component';
import { SkillComponent } from './Screens/skill/skill.component';
import { ExperienceComponent } from './Screens/experience/experience.component';
import { ProjectSectionComponent } from './Screens/project-section/project-section.component';
import { AboutComponent } from './Screens/about/about.component';
import { ContactComponent } from './Screens/contact/contact.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: MasterViewComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' }, // Redirecting 'home' to MasterScreenComponent
    { path: 'skills', component: SkillComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'project', component: ProjectSectionComponent },
    { path: 'about', component: AboutComponent },  
    { path: 'contact', component: ContactComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }