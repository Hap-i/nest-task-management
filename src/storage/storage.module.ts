import { Module } from '@nestjs/common';
import { StorageModule, DriverType } from '@codebrew/nestjs-storage';

@Module({
  imports: [
    StorageModule.forRoot({
      default: 'local',
      disks: {
        local: {
          driver: DriverType.LOCAL,
          config: {
            root: process.cwd(),
          },
        },
      },
    }),
  ],
})
export class StorageModuleInternal {}
