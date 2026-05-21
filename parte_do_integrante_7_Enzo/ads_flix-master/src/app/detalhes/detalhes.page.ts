import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonSpinner,
  IonBadge,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-detalhes',
  templateUrl: 'detalhes.page.html',
  styleUrls: ['detalhes.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonSpinner,
    IonBadge,
    IonIcon,
  ],
})
export class DetalhesPage implements OnInit {
  // ID do filme recebido pela rota
  filmeId: string | null = null;

  // Dados do filme (virão do serviço / API)
  filme: any = null;
  carregando: boolean = true;
  erro: string | null = null;

  // URL base para os posters do TMDB
  private readonly IMG_BASE = 'https://image.tmdb.org/t/p/w500';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // ✅ Recupera o parâmetro dinâmico ':id' da URL
    this.filmeId = this.route.snapshot.paramMap.get('id');

    if (this.filmeId) {
      this.carregarDetalhes(this.filmeId);
    } else {
      this.erro = 'ID do filme não encontrado na rota.';
      this.carregando = false;
    }
  }

  /**
   * Busca os detalhes do filme diretamente na API do TMDB usando o ID.
   * Substitua a chave de API pela mesma usada no cinema.service.ts do grupo.
   */
  carregarDetalhes(id: string) {
    const apiKey = '1f54bd990f1cdfb230adb312546d765d'; // mesma chave do grupo
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar filme');
        return res.json();
      })
      .then((data) => {
        this.filme = data;
        this.carregando = false;
      })
      .catch((err) => {
        this.erro = 'Não foi possível carregar os detalhes do filme.';
        this.carregando = false;
        console.error(err);
      });
  }

  /** Monta a URL completa do poster */
  getPosterUrl(path: string): string {
    return path ? `${this.IMG_BASE}${path}` : 'assets/sem-poster.png';
  }

  /** Formata a nota de 0-10 para exibir com uma casa decimal */
  getNota(nota: number): string {
    return nota ? nota.toFixed(1) : 'N/A';
  }
}
