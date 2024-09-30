import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  // Button text
  downloadButtonText = 'Download CV';

  // Section title and description
  sectionTitle = 'Experience';
  sectionDescription = 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites';

  // Experience entries
  experience1 = {
    year:'2024-present',
    company: 'CKS Solutions, Nagercoil',
    title: 'Website Developer',
    description: 'Collaborated with other software developers on design, development, and testing of programs. Designed and implemented various web-based applications for clients. Integrated data from various back-end services and databases. Designed and developed using Agile Scrum methodology.'
  };

  experience2 = {
    year:'2024',
    company: 'CKS Solutions, Nagercoil',
    title: 'Intern, Full-Stack Development',
    description: 'Collaborated on design, development, and testing of web applications, integrating data from various back-end services to ensure seamless performance. Designed and implemented new features using Agile Scrum methodology, enhancing functionality and improving user experience across platforms.'
  };

  experience3 = {
    year:'2024',
    company: 'CKS Solutions, Nagercoil',
    title: 'Flutter Developer',
    description: 'Designed and coded new software or modified existing software to add new features. Developed mobile applications using Flutter, ensuring seamless performance across different platforms. Collaborated with cross-functional teams to ensure high-quality application development. Conducted testing and debugging to optimize mobile applications.'
  };

  experience4 = {
    year:'2023-2024',
    company: 'Digisailor, Thoothukudi',
    title: 'Data Analyst',
    description: 'A Data Analyst collects, processes, and analyzes data to help organizations make informed decisions. They identify patterns, trends, and insights to solve business problems, using tools like Excel, SQL, and data visualization software such as Power BI.'
  };
  downloadCV() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/Document/Manikaraj Resume 2024.pdf');
    link.setAttribute('download', 'Manikaraj Resume 2024.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
