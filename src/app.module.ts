import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { PostEntity } from './post/entities/post.entity';
import { CommentModule } from './comment/comment.module';
import { CommentEntity } from './comment/entities/comment.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot()],
})
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: 'localhost',
      host: 'ec2-54-89-105-122.compute-1.amazonaws.com',
      port: 5432,
      // username: 'postgres',
      username: 'xmnisyqsigcgej',
      // username: process.env.DATABASE_USERNAME, // postgres
      // password: 'password',
      password: '46d8fa6139f9d4292c3d6de8ff5421d5684207ffd71ae4183aab7be2a0bdcc90',
      // password: process.env.DATABASE_PASSWORD, // password
      // database: 'tjournal',
      database: 'deklhofg7gji8v',
      entities: [UserEntity, PostEntity, CommentEntity],
      synchronize: true,
    }),
    UserModule,
    PostModule,
    CommentModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
