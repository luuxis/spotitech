import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';
import { Artists } from './artists.entity';
@Injectable()
export class ArtistsService {
    constructor(
        @Inject('ARTISTS_REPOSITORY') private artistsRepository: typeof Artists
    ) { }

    async findAll(limit: number, page?: number): Promise<Artists[]> {
        const offset = page ? (page - 1) * limit : 0;
        return this.artistsRepository.findAll({
            limit,
            offset,
        });
    }

    async findOne(id: number): Promise<Artists | null> {
        return this.artistsRepository.findByPk(id);

    }

    async search(query: string): Promise<Artists[]> {
        return this.artistsRepository.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.like]: `%${query}%` } },
                    { description: { [Op.like]: `%${query}%` } },
                    { bio: { [Op.like]: `%${query}%` } },
                ],
            },
        });
    }
}
