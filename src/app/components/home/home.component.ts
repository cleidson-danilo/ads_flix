import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from '../../services/tmdb';
import { SHARED_IMPORTS } from '../../shared.import';
import { addIcons } from 'ionicons';
import { star, search } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [...SHARED_IMPORTS],
})
export class HomeComponent implements OnInit {

  filmes: any[] = [];
  isLoading = true;

  constructor(
    private tmdb: TmdbService,
    private router: Router
  ) {
    addIcons({ star, search });
  }

  ngOnInit() {
    this.loadFilmes();
  }

  loadFilmes() {
    this.isLoading = true;
    this.tmdb.getPopular().subscribe({
      next: (data: any) => {
        this.filmes = data.results;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  getPoster(path: string) {
    return this.tmdb.getImageUrl(path, 'w500');
  }

  verDetalhes(id: number) {
    this.router.navigate(['/movie', id]);
  }

}