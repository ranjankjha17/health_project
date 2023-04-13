import React from 'react'

const ThirdSection = () => {
    const data = [
        {
            'id': 1,    
            "text":"15K",       
            "title": "Happy Customers"          

        },
        {
            'id': 2,    
            "text":"150K",       
            "title": "Monthly Visitors"          

        },
        {
            'id': 3,    
            "text":"15",       
            "title": "Countries  Worldwide"          

        },
        {
            'id': 4,    
            "text":"100+",       
            "title": "Top Partners"          

        },
    ]
  return (
    <div className='row z-index-2 d-flex justify-content-between' style={{marginBottom:"5rem",marginTop:"5rem"}}>
            {data.map((e) => (
                <div className='col-12 col-lg-3 col-xl-3 text-center' key={e.id}>
                   <h1 className='heading' style={{color:"#FF685B"}}>{e.text}</h1>
                    
                    <h5 className='title'>{e.title}</h5>
                   
                </div>
            ))

            }

        </div>
  )
}

export default ThirdSection