import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TmdbService } from '../../services/tmdb';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar,
  IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonSpinner, IonItem, IonLabel, IonImg,
  IonChip, IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { timeOutline, closeCircle } from 'ionicons/icons';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar,
    IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle,
    IonCardSubtitle, IonSpinner, IonItem, IonLabel, IonImg,
    IonChip, IonIcon,
    CommonModule, FormsModule, RouterLink
  ]
})
export class BuscarPage {
  public resultados: any[] = [];
  public carregando: boolean = false;
  public pesquisado: boolean = false;
  public buscasRecentes: string[] = [];

  constructor(private tmdb: TmdbService) {
    addIcons({ timeOutline, closeCircle });
    this.carregarRecentes();
  }

  carregarRecentes() {
    const salvo = localStorage.getItem('buscasRecentes');
    this.buscasRecentes = salvo ? JSON.parse(salvo) : [];
  }

  salvarRecente(termo: string) {
    this.buscasRecentes = this.buscasRecentes.filter(b => b !== termo);
    this.buscasRecentes.unshift(termo);
    this.buscasRecentes = this.buscasRecentes.slice(0, 5);
    localStorage.setItem('buscasRecentes', JSON.stringify(this.buscasRecentes));
  }

  removerRecente(termo: string) {
    this.buscasRecentes = this.buscasRecentes.filter(b => b !== termo);
    localStorage.setItem('buscasRecentes', JSON.stringify(this.buscasRecentes));
  }

  buscarPorTermo(termo: string) {
    this.pesquisado = true;
    this.carregando = true;
    this.salvarRecente(termo);

    this.tmdb.search(termo).subscribe({
      next: (data: any) => {
        this.resultados = data.results || [];
        this.carregando = false;
      },
      error: () => {
        this.carregando = false;
      }
    });
  }

  buscarFilme(event: any) {
    const valor = event.target.value;

    if (!valor || valor.trim() === '') {
      this.resultados = [];
      this.pesquisado = false;
      return;
    }

    this.buscarPorTermo(valor.trim());
  }

  getPoster(path: string) {
    return this.tmdb.getImageUrl(path, 'w200');
  }
}