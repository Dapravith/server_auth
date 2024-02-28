import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ResetModule } from './reset/reset.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'rootroot',
            database: 'nest_auth',
            autoLoadEntities: true,
            synchronize: true,
        }),
        UserModule,
        ResetModule,
    ],
})
export class AppModule {
}