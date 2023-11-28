import React, { FC } from 'react';
import { IGenre } from '../../../interface/genresInterface';
import css from './Genre.module.css';
import { useNavigate } from 'react-router-dom';


interface IProps {
    genre: IGenre;
}

const Genre: FC<IProps> = ({ genre }) => {
    const { id, name } = genre;
    const navigate = useNavigate();

    const handleGenreClick = () => {
        navigate(`/genres/${genre.id}`);
    };

    return (
        <div className={css.name} onClick={handleGenreClick}>
            <div className={css.name2}>{name}</div>
        </div>
    );
};

export default Genre;


