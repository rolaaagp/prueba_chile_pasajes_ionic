export interface ImageModel {
  gif_count: number;
  gifs: string[];
  http: string[];
  image_count: number;
  images: string[];
}

export interface ImgResponse { url: string; name: string };

export interface ImgRandomResponse {
  message: string;
  url: string;
}