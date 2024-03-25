import { Tracks } from './tracks.entity';

export const tracksProviders = [
    {
        provide: 'TRACKS_REPOSITORY',
        useValue: Tracks
    }
];
