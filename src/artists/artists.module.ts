import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ArtistsController } from './artists.controller';
import { ArtistsService } from './artists.service';
import { artistsProviders } from './artists.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [ArtistsController],
    providers: [
        ArtistsService,
        ...artistsProviders,
    ],
    exports: [ArtistsService]
})
export class ArtistsModule { }
