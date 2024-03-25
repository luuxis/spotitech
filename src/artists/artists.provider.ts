import { Artists } from './artists.entity';

export const artistsProviders = [
    {
        provide: 'ARTISTS_REPOSITORY',
        useValue: Artists
    }
];
