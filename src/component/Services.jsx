import React from 'react'
import './styles/services.scss'

const Services = () => {
    const data = [
        {
            'id': 1,
            "image": "./images/cardiogram.png",
            "title": "Online Appoinment",
            "description": `The gradual accumulation of 
            information about atomic and 
            small-scale behaviour...`,

        },
        {
            'id': 2,
            "image": "./images/vector.png",
            "title": "Emergency Case",
            "description": `The gradual accumulation of 
            information about atomic and 
            small-scale behaviour...`,

        },
        {
            'id': 3,
            "image": "./images/medical-history.png",
            "title": "Cancer Care",
            "description": `The gradual accumulation of 
            information about atomic and 
            small-scale behaviour...`,

        }
    ]
    return (
        <div className='row z-index-2 d-flex justify-content-between' style={{marginTop:"-5rem",marginBottom:"5rem"}}>
            {data.map((e) => (
                <div className='card col-4 shadow-md shadow-lg' key={e.id}>
                    <div className='circle'>
                        <img src={e.image} alt={e.title}/>
                    </div>
                    
                    <h5 className='title'>{e.title}</h5>
                    <div className='line'></div>
                    <div className='description'>{e.description}</div>
                </div>
            ))

            }

        </div>
    )
}

export default Services