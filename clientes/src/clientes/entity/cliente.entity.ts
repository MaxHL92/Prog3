import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'cliente'})
export class Cliente {
  @PrimaryGeneratedColumn({
    type:'int',
    name: 'id',
  })
  id: number;
  @Column('varchar', {
    length: 100,
    name: 'cliente_nombre',
  })
  cliente_nombre: string;

  @Column('varchar', {
    length: 100,
    name: 'cliente_apellido',
  })
  cliente_apellido: string;

  @Column('varchar', {
    length: 100,
    name: 'cliente_telefono',
  })
  cliente_telefono: string;

  @Column('varchar', {
    length: 100,
    name: 'cliente_email',
  })
  cliente_email: string;

  @Column('boolean', {
    name: 'cliente_activo',
  })
  cliente_activo: boolean;

}
