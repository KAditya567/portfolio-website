import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('one') one: ElementRef | undefined; // id or id
  @ViewChild('two') two: ElementRef | undefined;
  @ViewChild('three') three: ElementRef | undefined;
  @ViewChild('mainicon') mainicon: ElementRef | undefined;

  button(){
    if(this.mainicon && this.one && this.two && this.three!= null){
      this.mainicon.nativeElement.classList.toggle('burger');
        this.two.nativeElement.classList.toggle('second');
        this.one.nativeElement.classList.toggle('first');
        this.three.nativeElement.classList.toggle('third');
    }
  }

}
