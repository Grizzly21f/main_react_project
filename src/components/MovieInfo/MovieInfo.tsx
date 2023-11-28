import React, { FC } from 'react';
import { IMovie } from "../../interface/moviesinterface";


interface IProps {
    movieinfo: IMovie;
}

const MovieInfo: FC<IProps> = ({ movieinfo }) => {
 const {id} = movieinfo
    return (
        <div>
           <div>id: {id}</div>
        </div>
    );
};

export { MovieInfo };
