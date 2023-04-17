import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://runningthroughwoodland:1437@cluster0.koks5ug.mongodb.net/?retryWrites=true&w=majority',
    ),
    TrackModule,
  ],
})
export class AppModule {}
