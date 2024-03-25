import { Controller, Get, Query, Param } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { AlbumsService } from './albums.service';

@Controller('albums')
export class AlbumsController {
    constructor(private albumsService: AlbumsService) { }

    @Get('/')
    @ApiQuery({ name: 'limit', type: Number, required: false, description: 'how many results per page. Used only if page is set' })
    @ApiQuery({ name: 'page', type: Number, required: false, description: 'page number' })
    async getAlbums(@Query('page') page?: number, @Query('limit') limit?: number) {
        return this.albumsService.findAll(limit, page);
    }

    @Get('/:id')
    async getAlbum(@Param('id') id: number) {
        return this.albumsService.findOne(id);
    }

    @Get('/artist/:id')
    async getAlbumsForArtist(@Param('id') id: number) {
        return this.albumsService.findByArtist(id);
    }
}
