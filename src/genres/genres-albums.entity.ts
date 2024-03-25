import { Table, Column, Model, PrimaryKey, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'genres_albums',
    timestamps: false,
})
export class GenreAlbum extends Model {
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    genre_id!: number;

    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    album_id!: number;
}
