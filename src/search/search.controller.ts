import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { SearchService } from './search.service';
import { QueryTypeEnum } from './search.types';

@Controller('search')
export class SearchController {
    constructor(private readonly searchService: SearchService) { }

    @Get('/')
    @ApiQuery({ name: 'query', required: true, description: 'The value to search for' })
    @ApiQuery({ name: 'type', required: true, description: 'The table to search in', enum: QueryTypeEnum })
    async search(@Query('query') query: string, @Query('type') type: string): Promise<any> {

        return this.searchService.search(query, type);
    }
}
