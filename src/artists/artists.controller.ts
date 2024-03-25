import { Controller, Get, Query, Param } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { ArtistsService } from './artists.service';

@Controller('artists')
export class ArtistsController {
    constructor(private artistsService: ArtistsService) { }

    @Get('/')
    @ApiQuery({ name: 'limit', type: Number, required: false, description: 'how many results per page. Used only if page is set' })
    @ApiQuery({ name: 'page', type: Number, required: false, description: 'page number' })
    async getArtists(@Query('page') page?: number, @Query('limit') limit?: number): Promise<any> {
        return this.artistsService.findAll(limit, page);
    }

    @Get('/:id')
    async getArtist(@Param('id') id: number): Promise<any> {
        return this.artistsService.findOne(id);
    }
}
