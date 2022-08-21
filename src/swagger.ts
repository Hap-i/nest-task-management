import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle('Task Management')
  .setDescription('A sample app')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

export const swaggerPath = 'api';

export const swaggerSetupOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl:
    'https://drive.google.com/uc?export=view&id=1VLZ8ep5cr3EKwVB3WRZu8oOkmAHIO5JP',
  // customfavIcon: './favicon.png',
  customSiteTitle: 'Sample app',
};
