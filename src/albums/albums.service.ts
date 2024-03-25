import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';
import { TracksService } from '../tracks/tracks.service';
import { Albums } from './albums.entity';

@Injectable()
export class AlbumsService {
  constructor(
    @Inject('ALBUMS_REPOSITORY') private albumsRepository: typeof Albums,
    private tracksService: TracksService,
  ) { }

  async findAll(limit: number = 10, page?: number): Promise<any> {
    if (page) {
      const offset = (page - 1) * limit >= 0 ? (page - 1) * limit : 0;
      return await this.albumsRepository.findAll({
        limit: parseInt(`${limit}`),
        offset,
      });
    }
    return this.albumsRepository.findAll();
  }

  async findOne(id: number): Promise<any> {
    const album = await this.albumsRepository.findByPk(id);
    const tracks = await this.tracksService.findByAlbum(id);
    return { album, tracks };
  }

  async findByArtist(id: number): Promise<any> {
    return this.albumsRepository.findAll({
      where: { artist_id: id },
    });
  }

  async search(query: string): Promise<any> {
    return this.albumsRepository.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${query}%` } },
          { description: { [Op.like]: `%${query}%` } },
        ],
      },
    });
  }
}
