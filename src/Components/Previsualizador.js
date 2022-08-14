import { marked } from 'marked';
import Markdown from 'marked-react';
import React from 'react';
import "./Styles.css"

export default function Previsualizador(props){
    return (
       <>
       <div className="cajaPadre">
        <div className="titulo">Markdown</div>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.mensaje)}}></div>
       </div>
       </>
    );
}