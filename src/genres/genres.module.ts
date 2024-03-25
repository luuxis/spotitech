import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { genresProviders } from './genres.provider';
import { GenresService } from './genres.service';
import { GenresController } from './gernes.controller';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...genresProviders,
        GenresService,
    ],
    controllers: [GenresController],
    exports: [GenresService]
})
export class GenresModule { }
