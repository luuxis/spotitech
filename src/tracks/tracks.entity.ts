import { Table, Column, Model, PrimaryKey, DataType, } from 'sequelize-typescript';

@Table({
    tableName: 'tracks',
    timestamps: false
})
export class Tracks extends Model {
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;

    @Column(DataType.INTEGER)
    album_id: number;

    @Column(DataType.TEXT)
    name: string;

    @Column(DataType.INTEGER)
    track_no: number;

    @Column(DataType.INTEGER)
    duration: number;

    @Column(DataType.TEXT)
    mp3: string;
}
