import { Injectable } from '@nestjs/common';
import { AlbumsService } from '../albums/albums.service';
import { GenresService } from '../genres/genres.service';
import { ArtistsService } from '../artists/artists.service';

@Injectable()
export class SearchService {
    constructor(
        private albumService: AlbumsService,
        private genreService: GenresService,
        private artistService: ArtistsService
    ) { }

    async search(query: string, type: string) {
        switch (type) {
            case 'album':
                return { albums: await this.albumService.search(query) };
            case 'artist':
                return { artists: await this.artistService.search(query) };
            case 'genre':
                return { genres: await this.genreService.search(query) };
            default:
                return { error: 'Invalid search type' };
        }
    }
}
