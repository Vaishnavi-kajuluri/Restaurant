import React from 'react'
import {data} from '../restapi.json'
const Team = () => {
  return (
    <section className='team' id='team'>
  <div className="container">
    <div className="heading_section">
     <h1 className='heading'>OUR TEAM</h1>
     <p> 
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus officia qui repellat
     </p>
    </div>
    <div className="team_container">
   {
    data[0].team.map(ele=>{
       return(
        <div className="card" key={ele.id}>
            <img src={ele.image} />
            <h1>{ele.name}</h1>
            <p>{ele.designation}</p>
        </div>
       )
    })
   }        
    </div>
  </div>
    </section>
  )
}

export default Team
