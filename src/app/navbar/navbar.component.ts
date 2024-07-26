import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  private hasScrolled = false;

  @HostListener("window:scroll", ['$event']) 
  onWindowScroll(event: Event) {
    const verticalPosition = window.scrollY || document.documentElement.scrollTop;
    let container = document.querySelector('.container');
    let tabs = document.querySelector('.tabs');

    if(verticalPosition >= 30 && !this.hasScrolled && container && tabs) {
      container.classList.remove('expanded-nav');
      container.classList.add('compact-nav');
      tabs.classList.add('compact-tabs');
      this.hasScrolled = true;
      
    } else if(verticalPosition < 30 && this.hasScrolled && container && tabs) {
      container.classList.remove('compact-nav');
      container.classList.add('expanded-nav');
      tabs.classList.remove('compact-tabs');
      this.hasScrolled = false;
    }
  }

  scrollTo(fragment: string) {
    const element = document.getElementById(fragment);
    const tab = element?.getAttribute('id');
    
    if (element) {
      if(tab === 'connect') {
        const yOffset = -0;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      
    }
  }
}
