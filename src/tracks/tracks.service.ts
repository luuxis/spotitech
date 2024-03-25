import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class TracksService {
    constructor(
        @Inject('TRACKS_REPOSITORY')
        private tracksRepository: any
    ) { }


    async findAll(): Promise<any[]> {
        return this.tracksRepository.findAll();
    }


    async findOne(id: number): Promise<any> {
        return this.tracksRepository.findByPk(id);
    }


    async findByAlbum(id: number): Promise<any[]> {
        return this.tracksRepository.findAll({
            where: { album_id: id }
        });
    }
}
