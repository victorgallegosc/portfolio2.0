import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Personal Portfolio',
      link: 'www.victorgallegos.com',
      image: 'img/Profile-skin.webp',
      repo: 'https://github.com/victorgallegosc/portfolio2.0',
      description: 'This website was constructed in Angular and based on a prototype designed by me using Figma.',
      skills: [
        'HTML',
        'CSS',
        'Angular',
        'Git',
        'Github',
        'UI/UX',
        'Figma'
      ]
    }
  ]

  goToRepo(link: string) {
    window.open(link, '_blank');
  }
}
