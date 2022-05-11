import { useEffect, useState } from 'react';

export const Tag = ({ itemProp }) => {

    

    

    return (
        <>
            <input type="radio" id={itemProp} value={itemProp} name="tagChoice"/>
            <label htmlFor={itemProp}>{itemProp}</label>
        </>
        
    )
};