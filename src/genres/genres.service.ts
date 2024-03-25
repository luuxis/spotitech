import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize'
import { Genres } from './genres.entity';
import { GenreAlbum } from './genres-albums.entity'; 

@Injectable()
export class GenresService {
  constructor(
    @Inject('GENRES_REPOSITORY') private genresRepository: typeof Genres,
    @Inject('GENRES_ALBUMS_REPOSITORY') private genresAlbumsRepository: typeof GenreAlbum
  ) {}

  async findAll(limit: number = 10, page?: number): Promise<Genres[]> {
    const offset = page ? (page - 1) * limit : 0;
    return this.genresRepository.findAll({
      limit,
      offset,
    });
  }

  async findOne(id: number): Promise<{ genre: Genres; albums: number[] }> {
    const genre = await this.genresRepository.findByPk(id);
    if (!genre) {
      return null;
    }

    const albums = await this.genresAlbumsRepository.findAll({
      where: { genre_id: id },
      attributes: ['album_id'],
    });

    return {
      genre,
      albums: albums.map((e) => e.album_id),
    };
  }

  async search(query: string): Promise<Genres[]> {
    return this.genresRepository.findAll({
      where: {
        name: { [Op.like]: `%${query}%` },
      },
    });
  }
}
