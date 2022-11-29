import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './clientes/entity/cliente.entity';
import { ClientesController } from './clientes/clientes.controller';
import { ClientesService } from './clientes/clientes.service';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [
    ClientesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      port: 3306,
      password: '',
      database: 'clientes',
      entities: [Cliente],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Cliente])
  ],
  controllers: [AppController, ClientesController],
  providers: [AppService, ClientesService],
})
export class AppModule {}
