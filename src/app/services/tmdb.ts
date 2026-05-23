import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TmdbService {

  private readonly BASE_URL = 'https://api.themoviedb.org/3';
  private readonly API_KEY = 'a11170d15b19a56949c9463af858a8eb';
  private readonly IMAGE_URL = 'https://image.tmdb.org/t/p';

  constructor(private http: HttpClient) {}

  private getParams(extra: any = {}) {
    let params = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('language', 'pt-BR');

    Object.keys(extra).forEach(key => {
      params = params.set(key, extra[key]);
    });

    return params;
  }

  getMovie(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/movie/${id}`, {
      params: this.getParams({ append_to_response: 'credits,videos' })
    });
  }

  getPopular(page = 1): Observable<any> {
    return this.http.get(`${this.BASE_URL}/movie/popular`, {
      params: this.getParams({ page })
    });
  }

  getImageUrl(path: string, size = 'w500'): string {
    if (!path) return 'assets/icon/favicon.png';
    return `${this.IMAGE_URL}/${size}${path}`;
  }

}