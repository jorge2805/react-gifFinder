import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifts } from '../helpers/getGifts';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';



export const GifGrid = ({category}) => {

    const {data,loading} = useFetchGifs(category);

    return (
    <>
    <h3 className='animate__animated animate__bounce'>{category}</h3>
    <p className='animate__animated animate__flash'>{loading ? "Cargando..." : null}</p>
    <div className='card-grid'>       
        {
            data.map( image =>                
                <GifGridItem 
                key={image.id}
                {...image}                
                />
            )                
        }
    </div>
    </>
  )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
