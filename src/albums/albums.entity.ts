import { Table, Column, Model, PrimaryKey, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'albums',
    timestamps: false,
})
export class Albums extends Model {
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
    })
    id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    artist_id!: number;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    name!: string;

    @Column(DataType.TEXT)
    description?: string;

    @Column(DataType.TEXT)
    cover?: string;

    @Column(DataType.TEXT)
    cover_small?: string;

    @Column(DataType.INTEGER)
    release_date!: number;

    @Column(DataType.INTEGER)
    popularity!: number;
}
