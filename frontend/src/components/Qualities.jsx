import React from 'react'
import {data} from '../restapi.json'
const Qualities = () => {
  return (
    <section className='qualities' id='qualities'>
        <div className="container">
            {
                data[0].ourqualities.map((ele=>
                    
                    <div className="card" key={ele.id}>
                        <img src={ele.image} alt={ele.title}/>
                        <p className='title'>{ele.title}</p>
                        <p className='description'>{ele.description}</p>
                    </div>
                   ))}
        </div>
    </section>
  )
}

export default Qualities
