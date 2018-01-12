import React from 'react';

const MedalList = ({data, total, i}) =>(
        <tr>
            <td className="table__cell">
                <span className="table__cell-pos pull-left">{( i+1 )}</span>
                <span className={`flags-sprite flags-sprite-${data.code}`}></span> 
                {data.code}
            </td>
            <td className="table__cell" >{data.gold}</td>
            <td className="table__cell">{data.silver}</td>
            <td className="table__cell">{data.bronze}</td>
            <td className="table__cell"><strong>{total}</strong></td>
        </tr>
	)

export default MedalList;