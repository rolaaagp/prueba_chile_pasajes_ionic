import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImageModel, ImgRandomResponse, ImgResponse } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private readonly apiUrl = environment.API_URL;
  private readonly secureUrlCors = environment.SECURE_URL_CORS;
  private _http: HttpClient = inject(HttpClient);
  private _headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  });

  private imagesCache!: ImgResponse[];

  constructor() { }

  /**
   * Gets all images 
   * 
   * @description If images are in cache, return those, if not, return a new list of api 
   * @returns Gets all images from api, return a list of type ImageModel
  */
  getAll(): Observable<ImgResponse[]> {
    if (this.imagesCache) {
      return of(this.imagesCache);
    }

    return this._http
      .get<ImageModel>(`${this.secureUrlCors}/${this.apiUrl}/list?format=json`, {
        headers: this._headers,
      })
      .pipe(
        tap((response) => {
          this.imagesCache = response.images.map((image) => ({
            url: `${this.apiUrl}/${image}`,
            name: image,
          }));
        }),
        map(() => this.imagesCache)
      );
  }



  /**
 * Gets all images 
 * @returns Gets all images from api, return a list of type ImageModel
 */
  getRandomImage(): Observable<ImgRandomResponse> {
    return this._http.get<ImgRandomResponse>(`${this.secureUrlCors}/${this.apiUrl}/random`, { headers: this._headers });
  }


}