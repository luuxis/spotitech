import { Model, Column, PrimaryKey, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'artists', timestamps: false })
export class Artists extends Model {
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;

    @Column(DataType.TEXT)
    name: string;

    @Column(DataType.TEXT)
    description: string;

    @Column(DataType.TEXT)
    bio: string;

    @Column(DataType.TEXT)
    photo: string;
}
