import { Sequelize } from 'sequelize-typescript';
import { Artists } from '../artists/artists.entity';
import { Albums } from '../albums/albums.entity';
import { Tracks } from '../tracks/tracks.entity';
import { Genres } from '../genres/genres.entity';
import { GenreAlbum } from '../genres/genres-albums.entity';

export const databaseProviders = [
    {
        provide: "SEQUELIZE",
        useFactory: async () => {
            const sequelize = new Sequelize({
                logging: false,
                dialect: 'sqlite',
                storage: 'database.sqlite',
                models: [Artists, Albums, Tracks, Genres, GenreAlbum],
            });
            await sequelize.sync();
            return sequelize;
        }
    }
];
