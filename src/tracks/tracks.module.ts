import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TracksController } from './tracks.controller';
import { TracksService } from './tracks.service';
import { tracksProviders } from './tracks.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [TracksController],
    providers: [
        TracksService,
        ...tracksProviders
    ],
    exports: [TracksService]
})
export class TracksModule { }
