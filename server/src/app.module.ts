import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { ResumeController } from './modules/resume/resume.controller';
import { ResumeModule } from 'modules/resume/resume.module';
// import { CorsMiddleware } from './middleware/cors.middleware';

@Module({
  imports: [ ResumeModule ],
})
export class AppModule { }

// implements NestModule {
//   public configure(consumer: MiddlewaresConsumer) {
//     consumer.apply(CorsMiddleware).forRoutes(
//       { path: '/example', method: RequestMethod.GET },
//     );
//   }
// }