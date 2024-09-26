import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AllComponent } from './all/all.component';
import { GraphicComponent } from './graphic/graphic.component';
import { UiComponent } from './ui/ui.component';
import { WebComponent } from './web/web.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contact', component: ContactComponent },

    { path: 'all', component: AllComponent, outlet: 'portfolio' },
    { path: 'graphic', component: GraphicComponent, outlet: 'portfolio' },
    { path: 'UI', component: UiComponent, outlet: 'portfolio' },
    { path: 'web', component: WebComponent, outlet: 'portfolio' },
];
