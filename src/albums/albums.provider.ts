import { Albums } from './albums.entity';

export const albumsProviders = [
    {
        provide: 'ALBUMS_REPOSITORY',
        useValue: Albums
    }
];
