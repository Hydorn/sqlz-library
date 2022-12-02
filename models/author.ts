import { Table, Column, Model, HasMany, CreatedAt, UpdatedAt, DeletedAt, AllowNull, Unique, addAttributeOptions } from 'sequelize-typescript';
import Book from './book';
import sequelize from './Conection';

@Table({
    timestamps:true,
    paranoid:true
})
class Author extends Model{
    @Unique(true)
    @AllowNull(false)
    @Column
    name!: string;

    @AllowNull(false)
    @Column
    age!: number;

    @HasMany(()=>Book)
    books!: Book[];

    @CreatedAt
    creationDate!: Date;
  
    @UpdatedAt
    updatedOn!: Date;
  
    @DeletedAt
    deletionDate?: Date;
}

export default Author;