import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle('Task Management')
  .setDescription('A sample app')
  .setVersion('1.0')
  .addBearerAuth()
  .addCookieAuth('_jwt')
  .build();

export const swaggerPath = 'api';

export const swaggerSetupOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: '/swagger/swagger.css',
  customfavIcon: '/swagger/favicon.png',
  customSiteTitle: 'Sample app',
};
