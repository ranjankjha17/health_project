import React from 'react'
import SocialMedia from './SocialMedia'

const Team = () => {
    const data = [
        {
            "id": 1,
            "image": "./images/team1.png",
            "name": "Julian Jameson",
            "profession": "Profession"
        },
        {
            "id": 2,
            "image": "./images/team2.png",
            "name": "Julian Jameson",
            "profession": "Profession"
        },
        {
            "id": 3,
            "image": "./images/team3.png",
            "name": "Julian Jameson",
            "profession": "Profession"
        },
        {
            "id": 4,
            "image": "./images/team4.png",
            "name": "Julian Jameson",
            "profession": "Profession"
        }
    ]
    return (
        <>
            <div className='row' style={{marginTop:"10rem"}}>
                <div className='col-12'>
                    <h6 className='h6' style={{ fontWeight: "700", fontSize: "1rem" }}>Team</h6>
                    <h2 className='heading2'>Our Team</h2>
                    <div className='description w-50' style={{ marginBottom: "3rem" }}>Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics
                    </div>
                </div>
            </div>
            <div className='row'>
               
                    {
                        data.map((e)=>{
                            return(
                                <div className='team_card col-12 col-lg-3 text-center' key={e.id}>
                                    <img src={e.image} alt={e.name} style={{borderTopLeftRadius: "10%",borderTopRightRadius:"10%"}} width={300}/>
                                  <h5 className='mt-3 title fw-bold'>{e.name}</h5>   
                                  <p className='mt-3 text-muted'>{e.profession}</p>
                                  <div className='d-flex justify-content-center'>
                                  <SocialMedia/>
                                  </div>   
                                </div>
                            )
                        })
                    }

                
            </div>

        </>
    )
}

export default Team