import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

// Predefined WhatsApp number and message
private whatsappNumber = '7358982911'; // Replace with your WhatsApp number
private message = 'Hello, I am interested in your services!';

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'instant', block: 'start', inline: 'nearest' });
    }
  }
  sendWhatsAppMessage(): void {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${this.whatsappNumber}&text=${encodeURIComponent(this.message)}`;
    window.open(whatsappUrl, '_blank'); 
  }
    // Method to show the Instagram message
    showInstagramMessage(): void {
      alert('Follow me on Instagram at: mr.raju_r_');
    }
}
