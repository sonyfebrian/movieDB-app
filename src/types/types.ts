export type MovieType = {
    id: number;
    poster_path: string;
    original_title: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    release_date: string;
    runtime: number;
    genres: Array<{ id: number; name: string }>;
    video:boolean;
    backdrop_path:string;
    genre_ids:number[]
    adult:boolean
    total_pages: number;
  total_results: number;
  page: number;
  };

 export type MovieResult = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
 }  

 export interface Genre {
  id: number;
  name: string;
}

export interface Backdrop {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Poster {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface SearchResult {
  title: string;
  path: string;
}

 //  Movie Details
export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieDetailsResult {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// Movie Images

export interface MovieImages {
  id: number;
  backdrops: Backdrop[];
  posters: Poster[];
}
