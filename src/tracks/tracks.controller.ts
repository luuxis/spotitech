import { Controller, Get, Param } from '@nestjs/common';
import { TracksService } from './tracks.service';

@Controller('tracks')
export class TracksController {
    constructor(private readonly tracksService: TracksService) { }

    @Get('/:id')
    async getTrack(@Param('id') id: number): Promise<any> {
        return this.tracksService.findOne(id);
    }
}
