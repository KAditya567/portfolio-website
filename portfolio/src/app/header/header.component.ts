import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ResumeComponent } from '../resume/resume.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ HomeComponent,AboutComponent,ResumeComponent,PortfolioComponent,ContactComponent,RouterLink,RouterLinkActive,RouterOutlet ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
