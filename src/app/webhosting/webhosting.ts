import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-webhosting',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './webhosting.html',
  styleUrl: './webhosting.css',
})
export class Webhosting {
  activeIndex: number | null = 0; // first open

  services = [
    {
      title: 'Website Design',
      description: 'Modern and user-friendly website designs that create strong first impressions.',
      image: 'images/websitedesign.png',
      points: [
        'Client-Centric Approach',
        'Creative UI/UX Design',
        'Responsive Layouts',
        'SEO-Friendly Structure',
        'Ongoing Support'
      ]
    },
    {
      title: 'Web Development',
      description: 'Robust and scalable web applications tailored to your business needs.',
      image: '/images/webdevelop.png',
      points: [
        'Custom Development',
        'Latest Technologies',
        'High Performance',
        'Secure Architecture'
      ]
    },
    {
      title: 'Mobile App Development',
      description: 'Build high-performance mobile apps for Android and iOS platforms.',
      image: '/images/appdevelop.png',
      points: [
        'User-Friendly UI',
        'Cross-Platform Apps',
        'Fast Performance',
        'Scalable Solutions'
      ]
    },
    {
      title: 'E-Commerce Development',
      description: 'Create powerful online stores that boost sales and customer experience.',
      image: '/images/cms.png',
      points: [
        'Secure Payment Integration',
        'Shopping Cart सिस्टम',
        'Mobile Optimization',
        'Custom Features'
      ]
    },
    {
      title: 'CMS Development',
      description: 'Manage your website content easily with flexible CMS solutions.',
      image: '/images/cms.png',
      points: [
        'Custom CMS',
        'Easy Content Management',
        'Scalable Platform',
        'SEO Ready'
      ]
    },
    {
      title: 'Web Hosting',
      description: 'Fast, secure, and reliable hosting solutions for your website.',
      image: '/images/webhost.png',
      points: [
        '99.9% Uptime',
        'High-Speed Servers',
        '24/7 Support',
        'Secure Hosting'
      ]
    },
    {
      title: 'Digital Marketing',
      description: 'Grow your business with powerful digital marketing strategies.',
      image: '/images/digitalmarket.png',
      points: [
        'Social Media Marketing',
        'Campaign Strategy',
        'Lead Generation',
        'Analytics & Reports'
      ]
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your search rankings and drive organic traffic.',
      image: '/images/seo.png',
      points: [
        'Keyword Research',
        'On-Page SEO',
        'Technical SEO',
        'Link Building'
      ]
    }
  ];

  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
