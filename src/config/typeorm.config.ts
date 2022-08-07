import { TypeOrmModuleOptions } from '@nestjs/typeorm';


export const typeOrpmConfig: TypeOrmModuleOptions = {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Ahmed01008453103',
        database: 'products',
        synchronize: true,
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        keepConnectionAlive: true
}