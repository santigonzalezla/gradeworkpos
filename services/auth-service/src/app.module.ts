import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './database/prisma.module';
import { UserModule } from './user/user.module';
import { CredentialsModule } from './credentials/credentials.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, CredentialsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
