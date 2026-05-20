import type { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import type { Observable } from "rxjs";
import { env } from "../../env";

@Injectable({
	providedIn: "root",
})
export class Api {
    private baseUrl = "https://api.watchmode.com/v1";
    private apiKey = env.WATCHMODE_API_KEY;

    constructor(private http: HttpClient) {}

    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'Ocorreu um erro desconhecido!';
        
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Erro do lado do cliente: ${error.error.message}`;
        } else {
            errorMessage = `Código do erro retornado pelo servidor: ${error.status}\nMensagem: ${error.message}`;
            
            if (error.status === 429) {
                errorMessage = "Limite de requisições excedido na API Watchmode.";
            } else if (error.status === 401 || error.status === 403) {
                errorMessage = "Chave de API inválida ou não autorizada.";
            }
        }
        
        console.error(errorMessage);
        return throwError(() => new Error(errorMessage));
    }

    /**
     * @param page
     * @param category
     */
    getPopularMovies(page: number = 1, category?: string): Observable<any> {
        let url = `${this.baseUrl}/list-titles/?apiKey=${this.apiKey}&types=movie&sort_by=popularity_desc&page=${page}`;

        if (category) {
            url += `&genres=${category}`;
        }

        return this.http.get(url).pipe(
            catchError(this.handleError)
        );
    }

    /**
     * @param title
     * @param page
     */
    searchMoviesByTitle(title: string, page: number = 1): Observable<any> {
        return this.http.get(
            `${this.baseUrl}/search/?apiKey=${this.apiKey}&search_field=name&search_value=${title}&types=movie&page=${page}`
        ).pipe(
            catchError(this.handleError)
        );
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

        return this.http.get(url).pipe(
            catchError(this.handleError)
        );
    }

    /**
     * @param title
     * @param page
     */
    searchSeriesByTitle(title: string, page: number = 1): Observable<any> {
        return this.http.get(
            `${this.baseUrl}/search/?apiKey=${this.apiKey}&search_field=name&search_value=${title}&types=tv_series&page=${page}`
        ).pipe(
            catchError(this.handleError)
        );
    }
}
