import React from 'react'

export default function ProductRow({product}) {
    return (
        <tr>
        <td className='data' style={product.stock ? {color: ""} : {color:"red"}}>{product.name}</td>
        <td className='data'>{product.price} </td>
        </tr>
    )
}