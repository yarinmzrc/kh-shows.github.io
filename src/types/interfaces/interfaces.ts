export interface IImage {
    medium: string;
    original: string;
  }
  
  export interface IRating {
    average: number;
  }
  
  export interface IShow {
    id: number;
    name: string;
    image: IImage;
    genres: string[];
    summary: string;
    rating: IRating;
    language: string;
    show: IShow;
    url: string;
  }
  
  export interface IShows {
    shows: IShow[];
  }

  export interface IPagination {
    showsPerPage: number;
    totalShows: number;
    paginate: any;
    currentPage: number;
}