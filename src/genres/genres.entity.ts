import { Table, Column, Model, PrimaryKey, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'genres',
    timestamps: false,
})
export class Genres extends Model {
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        allowNull: false,
    })
    id!: number;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    name!: string;
}
