import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit {
  importantJobs = [
    {
      title: 'Frontend Developer Intern',
      properties: {
        propertyName: 'Current',
        propertyColor: 'var',
      },
      description:
        'I am actively contributing to a web project built using Angular. As part of this initiative, I specialize in responsive design API consumption, app globalization, version control systems, and front-end development (HTML, CSS, and TypeScript).',
      initDate: {
        month: 'February',
        year: '2024',
      },
      endDate: {
        month: '',
        year: '',
      },
      place: 'Epicor',
      current: true,
    },
  ];

  ngOnInit() {}
}
