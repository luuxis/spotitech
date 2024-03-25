import { Module } from '@nestjs/common';
import { TracksModule } from '../tracks/tracks.module';
import { DatabaseModule } from '../database/database.module';
import { AlbumsController } from './albums.controller';
import { albumsProviders } from './albums.provider';
import { AlbumsService } from './albums.service';

@Module({
    imports: [DatabaseModule, TracksModule],
    controllers: [AlbumsController],
    providers: [AlbumsService, ...albumsProviders],
    exports: [AlbumsService]
})
export class AlbumsModule { }
