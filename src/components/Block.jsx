import React from 'react'
export default function Block(props) {
     return (
          <div className={`block d-flex ${props.directionRowReverse ? 'direction-row-reverse' : ''}`}>
               <div className={
                    `block-w-400
                    ${props.w400PaddingRight20 ? 'pading-r-20' : 'pading-l-20'}
                    ${props.w400BorderRight1 ? 'border-right-1' : ''}
                    `
                    }
               >
                    {props.childWidth400}
               </div>
               <div className=
                    {`block-w-700 ${props.w700PaddingLeft20 ? 'pading-l-20' : 'pading-r-20'}
                    ${props.w700BorderRight1 ? 'border-right-1' : ''}`
               }>
                    {props.childWidth700}
               </div>
          </div>
     )
}

