import React from 'react';
import {Card} from './Card';

export const CardList = (props) => {
  return(
    <div>
     {props.profile.map( profile => { return <Card {...profile} />} )} 
    </div>
  )
}