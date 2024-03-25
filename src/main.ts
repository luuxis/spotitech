import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module'; 
import 'dotenv/config'

(async () => {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Spotify')
        .setDescription('Spotify Mock API')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(process.env.REACT_APP_API_PORT);
})();

