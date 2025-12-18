import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'tb_categoria' })
    export class Categoria {

    @IsNotEmpty()
    @PrimaryGeneratedColumn ()
    id: number

    @IsNotEmpty()
    @Column ({ length:255, nullable: false})
    carro: string

    @IsNotEmpty()
    @Column ({length: 255, nullable: false})
    fabricante: string

    @IsNotEmpty()
    @Column ({length: 255, nullable:false})
    modelo: string

    @IsNotEmpty()
    @Column ({ type:'decimal', nullable:false})
    ano: number

    @IsNotEmpty()
    @Column ({length: 255, nullable:false})
    cor: string

    @IsNotEmpty()
    @Column ({length: 255, nullable:false})
    placa: string
}