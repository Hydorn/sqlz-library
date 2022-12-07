import { Table, Column, Model, CreatedAt, UpdatedAt, DeletedAt, ForeignKey, BelongsTo, AllowNull, Unique } from 'sequelize-typescript';
import Author from './author';

@Table({
    timestamps:true,
    paranoid:true
})
class Book extends Model{
    @AllowNull(false)
    @Unique(true)
    @Column
    name!: string;

    @AllowNull(false)
    @Column
    pages!: number;

    @Column
    price!: number;

    @ForeignKey(()=>Author)
    @Column
    authorId!: number;

    @BelongsTo(()=>Author)
    author!: Author;
    
    @CreatedAt
    creationDate!: Date;
  
    @UpdatedAt
    updatedOn!: Date;
  
    @DeletedAt
    deletionDate?: Date;
}

export default Book;