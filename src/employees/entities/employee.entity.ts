import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ length: 45 })
  firstname: string;
  @Column({ length: 45 })
  lastname: string;
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
