import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section4',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './section4.html',
  styleUrls: ['./section4.css'],
})
export class Section4 implements AfterViewInit {
  ngAfterViewInit(): void {
    const accordionCards = document.querySelectorAll('.accordion-card');

    accordionCards.forEach(card => {
      const top = card.querySelector('.accordion-top');

      top?.addEventListener('click', () => {
        if (card.classList.contains('active')) {
          card.classList.remove('active');
        } else {
          accordionCards.forEach(item => item.classList.remove('active'));
          card.classList.add('active');
        }
      });
    });
  }
}