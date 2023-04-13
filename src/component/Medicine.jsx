import React from 'react'
import "./styles/medicine.scss"
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
const Medicine = () => {
    const data = [
        {
            "id": 1,
            "image": "./images/profile1.png",
            "name": "Julian Jameson",
            "profession": "Profession",
            "desc": `Slate helps you see 
            how many more days 
            you need to work to 
            reach your financial 
            goal for the month 
            and year.`
        },
        {
            "id": 2,
            "image": "./images/profile2.png",
            "name": "Julian Jameson",
            "profession": "Profession",
            "desc": `Slate helps you see 
            how many more days 
            you need to work to 
            reach your financial 
            goal for the month 
            and year.`
        },
        {
            "id": 3,
            "image": "./images/profile3.png",
            "name": "Julian Jameson",
            "profession": "Profession",
            "desc": `Slate helps you see 
            how many more days 
            you need to work to 
            reach your financial 
            goal for the month 
            and year.`
        },

    ]
    return (
        <>
            <div className='row'>
                <div className='col-12 text-center text-sm-left text-md-center text-lg-left text-xl-left'>
                    <h6 className='h6' style={{ fontWeight: "700", fontSize: "1rem" }}>Practice Advice</h6>
                    <h2 className='heading2'>Leading Medicine</h2>
                    <div className='description w-100 w-lg-50 w-xl-50' style={{ marginBottom: "3rem" }}>Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics
                    </div>
                </div>
            </div>
            <div className='row mt-5'>

                {
                    data.map((e) => {
                        return (

                            <div className='medicine_card col-12 col-lg-4 col-xl-4 text-center text-sm-center text-md-centertext-lg-center text-xl-center' key={e.id}>
                                <a href=" #" className='text-muted'><AiFillStar style={{ color: "#F3CD03" }} /></a>
                                <a href=" #" className='text-muted'><AiFillStar style={{ color: "#F3CD03" }} /></a>
                                <a href=" #" className='text-muted'><AiFillStar style={{ color: "#F3CD03" }} /></a>
                                <a href=" #" className='text-muted'><AiFillStar style={{ color: "#F3CD03" }} /></a>
                                <a href=" #" className='text-muted'><AiOutlineStar style={{ color: "#F3CD03" }} /></a>
                                <p className='mt-3 text-muted' style={{padding:"0 100px"}}>{e.desc}</p>
                                <div className='d-flex justify-content-center'>
                                    <img src={e.image} alt={e.name}/>
                                    <div>
                                    <h5 className='mt-3 h6 fw-bold'>{e.name}</h5>
                                    <p className='mt-2 title'>{e.profession}</p>
                                    </div>


                                </div>
                            </div>
                        )
                    })
                }


            </div>

        </>
    )
}

export default Medicine