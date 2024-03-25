import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ArtistsModule } from './artists/artists.module';
import { DatabaseModule } from './database/database.module';
import { AlbumsModule } from './albums/albums.module';
import { TracksModule } from './tracks/tracks.module';
import { GenresModule } from './genres/genres.module';
import { SearchModule } from './search/search.module';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'build'),
        }),
        ArtistsModule,
        DatabaseModule,
        AlbumsModule,
        TracksModule,
        GenresModule,
        SearchModule
    ]
})
export class AppModule { }
