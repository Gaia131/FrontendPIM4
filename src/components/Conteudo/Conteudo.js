import React from "react"
import "./index.css"

export default function Conteudo({children}){
    return(
      <div className="a">
        <h1 className="conteudo">{children}</h1>
      </div>
    )
  }