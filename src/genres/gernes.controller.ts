import { Controller, Get, Query, Param } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { GenresService } from './genres.service';

@Controller('genres') 
export class GenresController {
  constructor(private genresService: GenresService) {}

  @Get('/')
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: false,
    description: 'how many results per page. Used only if page is set'
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'page number'
  })
  async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
    return this.genresService.findAll(limit, page);
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return this.genresService.findOne(id);
  }
}
