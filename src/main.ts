import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('The API description using swagger')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, documentFactory);

  app.use(
    '/reference',
    apiReference({
      content: documentFactory,
    }),
  );

  await app.listen(process.env.PORT ?? 3005);
}
bootstrap();
