import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    'HTML',
    'CSS',
    'Javascript',
    'Angular',
    'Bootstrap',
    'Responsive Design',
    'Git',
    'Github',
    'AzureDevOps'
  ];

  learningSkills = [
    'JQuery',
    'Node.js',
    'Express.js',
    'EJS',
    'API Consumption'
  ];

  familiarSkills = [
    'C#',
    'C++',
    'UI/UX',
    'Figma',
    'Adobe XD',
    'Microsoft 365'
  ];
}
