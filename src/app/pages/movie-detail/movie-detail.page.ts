import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../services/tmdb';
import { SHARED_IMPORTS } from '../../shared.import';
import { addIcons } from 'ionicons';
import { heart, heartOutline, star, logoYoutube } from 'ionicons/icons';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
  standalone: true,
  imports: [...SHARED_IMPORTS],
})
export class MovieDetailPage implements OnInit {

  movie: any = null;
  cast: any[] = [];
  trailer: any = null;
  isLoading = true;
  isFavorite = false;

  constructor(
    private route: ActivatedRoute,
    private tmdb: TmdbService
  ) {
    addIcons({ heart, heartOutline, star, logoYoutube });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.loadMovie(+id);
  }

  loadMovie(id: number) {
    this.isLoading = true;
    this.tmdb.getMovie(id).subscribe({
      next: (data: any) => {
        this.movie = data;
        this.cast = data.credits?.cast?.slice(0, 8) || [];
        this.trailer = data.videos?.results?.find(
          (v: any) => v.type === 'Trailer' && v.site === 'YouTube'
        );
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

  getBackdrop(path: string) {
    return this.tmdb.getImageUrl(path, 'w1280');
  }

  getRuntime(): string {
    if (!this.movie?.runtime) return '';
    const h = Math.floor(this.movie.runtime / 60);
    const m = this.movie.runtime % 60;
    return `${h}h ${m}m`;
  }

  openTrailer() {
    if (this.trailer) {
      window.open(`https://youtube.com/watch?v=${this.trailer.key}`, '_blank');
    }
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}