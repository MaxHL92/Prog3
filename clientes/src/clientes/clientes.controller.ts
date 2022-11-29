import {Body, Controller, Delete, Get, Param, Post, Put,} from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { Cliente } from './entity/cliente.entity';

@Controller('clientes')
export class ClientesController {
  constructor(private clientesService: ClientesService) {}

  @Get('getAll')
  getAllCliente() {
    return this.clientesService.getAllCliente();
  }

  @Get('getCliente/:id')
  getCliente(@Param() params) {
    return this.clientesService.getClienteporId(params.id);
  }

  @Delete('deleteCliente/:id')
  deleteCliente(@Param() params) {
    return this.clientesService.deleteCliente(params.id);
  }

  @Post('createCliente')
  public async createCliente(@Body() body: Cliente) {
    return await this.clientesService.createCliente(body);
  }

  @Put('editarCliente/:id')
  public async editarCliente(@Param() params, @Body() body: Cliente) {
    return await this.clientesService.editarCliente(params.id, body);
  }
}