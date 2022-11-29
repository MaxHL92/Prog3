import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Cliente } from './entity/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  //Metodo para obtener todos los clientes
  public async getAllCliente() {
    return await this.clienteRepository
      .createQueryBuilder('cliente')
      .select()
      .getMany();
  }

  //Metodo para seleccionar cliente por su id
  public async getClienteporId(id_cliente) {
    return await this.clienteRepository
      .createQueryBuilder('cliente')
      .select()
      .where({ id: id_cliente })
      .getOne();
  }

  //Metodo para eliminar cliente
  public async deleteCliente(id_cliente: number) {
    try {
      await this.clienteRepository.delete({
        id: id_cliente,
      });
      return {
        status: 200,
        msg: 'Cliente Borrado',
      };
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  //Metodo para actualizar datos clientes
  public async editarCliente(id_cliente, body:Cliente) {
    try {
      const ClienteToEdit = await this.clienteRepository.findOne({
        where: {
          id: id_cliente,
        },
      });
      ClienteToEdit.cliente_nombre = body.cliente_nombre;
      ClienteToEdit.cliente_apellido = body.cliente_apellido;
      ClienteToEdit.cliente_telefono = body.cliente_telefono;
      ClienteToEdit.cliente_email = body.cliente_email;
      ClienteToEdit.cliente_activo = body.cliente_activo;
      await this.clienteRepository.save(ClienteToEdit);
      return {
        status: 200,
        msg: 'Cliente Actualizado',
      };
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  //Metodo para crear un cliente
  public async createCliente(body) {
    const Crearcliente = new Cliente();
    Crearcliente.cliente_nombre = body.cliente_nombre;
    Crearcliente.cliente_apellido = body.cliente_apellido;
    Crearcliente.cliente_telefono = body.cliente_telefono;
    Crearcliente.cliente_email = body.cliente_email;
    Crearcliente.cliente_activo = true;
    try {
      const clienteGuardado = await this.clienteRepository.save(Crearcliente);
      return {
        status: 200,
        msg: 'Cliente Guardado.',
      };
    } catch (error) {
      return new BadRequestException(error);
    }
  }
}
