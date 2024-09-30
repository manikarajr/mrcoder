import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title1: string = "Hello I'm Manikaraj.";
  title2: string = "Software Developer.";
  description: string = '"I value clarity, empathy, and integrity above all else. These ideals guide my approach to problem solving and life in general."';
  imageUrl: string = "../../../assets/Image/rajuimage.png";
  altText: string = "A Digital Agency Specialized in AI and Web 3.0";

  typedTitle1: string = "";
  private currentIndex: number = 0;

  constructor() {
    this.typeTitle();
  }

  typeTitle() {
    if (this.currentIndex < this.title1.length) {
      this.typedTitle1 += this.title1.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => this.typeTitle(), 100); // Adjust typing speed (in ms) if needed
    }
  }
    // Scroll function to scroll smoothly to the About section
    scrollToAbout() {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
}
