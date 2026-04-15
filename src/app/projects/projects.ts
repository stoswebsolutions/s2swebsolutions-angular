import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';


@Component({
  selector: 'app-projects',
  imports: [Header,Footer,],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
 @ViewChild('carouselTrack') carouselTrack!: ElementRef;

  autoScrollInterval: any;

  ngAfterViewInit(): void {
    this.startAutoScroll();
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      const track = this.carouselTrack.nativeElement;

      track.scrollBy({
        left: 250,
        behavior: 'smooth'
      });

      // Restart from beginning when reaching end
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
        setTimeout(() => {
          track.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        }, 1000);
      }
    }, 2500);
  }

  scrollLeft() {
    this.carouselTrack.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.carouselTrack.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }

  ngOnDestroy(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }
}
