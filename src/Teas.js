import React from "react";
import TeaCard from "./TeaCard"
function Teas ({teas}) {
    return (
        <div id="tea-collection">{teas.map((tea)=>(
            <TeaCard tea ={tea} key = {tea.id} name ={tea.name} src= {tea.image} benefits = {tea.benefits} taste = {tea.taste} />
          ))}</div>
    )
}

export default Teas