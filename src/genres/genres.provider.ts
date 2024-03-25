import { Genres } from './genres.entity';
import { GenreAlbum } from './genres-albums.entity';

export const genresProviders = [
    {
        provide: 'GENRES_REPOSITORY',
        useValue: Genres,
    },
    {
        provide: 'GENRES_ALBUMS_REPOSITORY',
        useValue: GenreAlbum,
    }
];
