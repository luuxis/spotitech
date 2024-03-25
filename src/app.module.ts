import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistsModule } from './artists/artists.module';
import { DatabaseModule } from './database/database.module';
import { AlbumsModule } from './albums/albums.module';
import { TracksModule } from './tracks/tracks.module';
import { GenresModule } from './genres/genres.module';
import { SearchModule } from './search/search.module';

@Module({
    imports: [
        ArtistsModule,
        DatabaseModule,
        AlbumsModule,
        TracksModule,
        GenresModule,
        SearchModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
