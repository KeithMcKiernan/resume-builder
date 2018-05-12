import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';

@Module({
  exports: [...databaseProviders],
  components: [...databaseProviders],
})
export class DatabaseModule { }
