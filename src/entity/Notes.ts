import { PrimaryGeneratedColumn, Entity, Column, BaseEntity } from "typeorm";

@Entity()
export class Notes extends BaseEntity{
  @PrimaryGeneratedColumn() id: number;

  @Column() title: string;

  @Column() subTitle: string;

  @Column() noteImage: string;

  @Column() tags: string;

  @Column() content: string;

  @Column() owner: string;

  @Column({ default: new Date(Date.now() - 8640000 * 14) }) createdAt: Date;
}