import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonSpinner, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Api } from '../../services/api'; // Ajuste o caminho da pasta do service do Nascimento
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar,
    IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle,
    IonCardSubtitle, IonSpinner, IonItem, IonLabel,
    CommonModule, FormsModule, RouterLink
  ]
})
export class BuscarPage {
  public resultados: any[] = [];
  public carregando: boolean = false;
  public pesquisado: boolean = false; // Ajuda a saber se o usuário já tentou buscar algo

  constructor(private apiService: Api) {}

  // Função chamada toda vez que o usuário digita e dá enter ou clica em pesquisar
  buscarFilme(event: any) {
    const valor = event.target.value;

    if (!valor || valor.trim() === '') {
      this.resultados = [];
      this.pesquisado = false;
      return;
    }

    this.carregando = true;
    this.pesquisado = true;

    // Chamando o método que o Nascimento criou no Service
    this.apiService.searchMoviesByTitle(valor).subscribe({
      next: (data: any) => {
        // A Watchmode costuma retornar os dados dentro de uma propriedade 'title_results' ou direto.
        // Se no log vier diferente, ajustamos aqui.
        this.resultados = data.title_results || data.results || [];
        this.carregando = false;
      },
      error: (err) => {
        console.error(err);
        this.carregando = false;
      }
    });
  }
}
