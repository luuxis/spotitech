import { Module } from '@nestjs/common';
import { AlbumsModule } from '../albums/albums.module';
import { ArtistsModule } from '../artists/artists.module';
import { GenresModule } from '../genres/genres.module';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

@Module({
    controllers: [SearchController],

    imports: [AlbumsModule, ArtistsModule, GenresModule],

    providers: [SearchService]
})
export class SearchModule { }
