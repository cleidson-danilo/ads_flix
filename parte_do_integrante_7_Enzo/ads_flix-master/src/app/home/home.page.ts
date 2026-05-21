import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonSpinner,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,           // ✅ Necessário para [routerLink] no template
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
    IonSpinner,
  ],
})
export class HomePage implements OnInit {
  // Lista de filmes vinda do cinema.service.ts (Integrante 2)
  // Aqui fica o array que o @for itera no template
  filmes: any[] = [];

  constructor(/* private cinemaService: CinemaService */) {}

  ngOnInit() {
    // Quando o Integrante 2 criar o serviço, descomente:
    // this.cinemaService.getFilmes().subscribe(data => this.filmes = data);

    // Placeholder para testar a navegação antes do serviço estar pronto:
    this.filmes = [
      { id: 550, title: 'Clube da Luta', release_date: '1999-10-15', poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg' },
      { id: 238, title: 'O Poderoso Chefão', release_date: '1972-03-14', poster_path: '/3bhkrj58Vtu7enYsLlegkAo4WTL.jpg' },
    ];
  }
}

