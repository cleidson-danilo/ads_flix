import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import type { Observable } from "rxjs";
import { environment } from '../../environments/environment'

@Injectable({
	providedIn: "root",
})

export class Api {
    private baseUrl = "https://api.watchmode.com/v1";
    private apiKey = environment.watchmodeApiKey;

    constructor(private http: HttpClient) {}

    /**
     * @param page
     * @param category
     */
    getPopularMovies(page: number = 1, category?: string): Observable<any> {
        let url = `${this.baseUrl}/list-titles/?apiKey=${this.apiKey}&types=movie&sort_by=popularity_desc&page=${page}`;

        if (category) {
            url += `&genres=${category}`;
        }
        return this.http.get(url)
    }

    /**
     * @param title
     * @param page
     */
    searchMoviesByTitle(title: string, page: number = 1): Observable<any> {
        return this.http.get(
            `${this.baseUrl}/search/?apiKey=${this.apiKey}&search_field=name&search_value=${title}&types=movie&page=${page}`
        )
    }

    /**
     * @param page
     * @param category 
     */
    getPopularSeries(page: number = 1, category?: string): Observable<any> {
        let url = `${this.baseUrl}/list-titles/?apiKey=${this.apiKey}&types=tv_series&sort_by=popularity_desc&page=${page}`;

        if (category) {
            url += `&genres=${category}`;
        }

        return this.http.get(url)
    }

    /**
     * @param title
     * @param page
     */
    searchSeriesByTitle(title: string, page: number = 1): Observable<any> {
        return this.http.get(
            `${this.baseUrl}/search/?apiKey=${this.apiKey}&search_field=name&search_value=${title}&types=tv_series&page=${page}`
        )
    }
}

