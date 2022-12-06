import React from 'react'

interface IFigureImage {
   source: string
   altTxt?: string
   cname?: string
   clickAction?: (e: React.MouseEvent, source: string) => void
}

const FigureImage = ({cname, source, altTxt, clickAction}: IFigureImage) => {
   const blank = ()=>{}

   return (
      <figure onClick={clickAction ? (e) => clickAction(e, source) : blank} className={cname ?? ''}>

         <img loading='lazy' src={source} alt={altTxt ?? 'image'} />

      </figure>
   )
}

export default FigureImage