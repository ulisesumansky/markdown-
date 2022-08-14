import React from 'react'
import { useState } from 'react';
import './Styles.css'

export default function Editor(props){
    
    
    
    return(
        <>
            <div className='cajaPadre'>
                <div className="titulo">Editor</div>
                <textarea id="editor" cols={30} rows={10} placeholder='Escriba aquí' onChange={props.cambio}></textarea>
            </div>
        </>
    );
}