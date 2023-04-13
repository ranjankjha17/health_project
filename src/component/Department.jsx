import React from 'react'
import './styles/department.scss'
const Department = () => {
    const data = [
        {
            'id': 1,
            'title1': 'Painless procedures',
            'title': 'Quick examination',
            'description': `We focus on ergonomics and meeting 
            you where you work. It's only a 
            keystroke away.`,
            'image': './images/product-cover-1.png'
        },
        {
            'id': 2,
            'title1': 'Cancer Care',
            'title': 'Online Appoinment',
            'description': `We focus on ergonomics and meeting 
            you where you work. It's only a 
            keystroke away.`,
            'image': './images/product-cover-2.png'
        },
        {
            'id': 3,
            'title1': 'Best dental surgeons',
            'title': 'Emergency Case',
            'description': `We focus on ergonomics and meeting 
            you where you work. It's only a 
            keystroke away.`,
            'image': './images/product-cover-3.png'
        }
    ]
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <h6 className='h6' style={{ fontWeight: "700", fontSize: "1rem" }}>Practice Advice</h6>                <h2 className='heading' style={{ fontSize: "3rem" }}>Our Department</h2>
                    <div className='description w-50' style={{ marginBottom: "3rem" }}>Problems trying to resolve the conflict between
                        Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-between mb-5'>
                        {
                            data.map((e) => (
                                <div className='dep_card' key={e.id}>
                                    <img src={e.image} alt={e.title} />
                                    <div className='p-4'>
                                        <div>
                                        <h6>{e.title1}</h6>
                                        <a href=' #' className='right_icon'>
                                            {/* <img src="./images/icon emojione-star.png" alt="image" height={16} width={16}/> */}
                                            4.9
                                        </a>
                                        </div>
                                        <h5 className='title'>{e.title}</h5>
                                        <div className='description'>{e.description}</div>
                                        <div className='d-flex justify-content-start'>
                                            <img src="./images/Vector1.png" alt="img" className='small_image'/>
                                            <h5 className='description'>15 Sales</h5>
                                        </div>
                                        <div className='description'>$16.48 <span className="dollor">$6.48</span></div>
                                        <div className='button4_area'>
                                            <a className='button4' href=' #'>Learn More {'>'}</a>
                                        </div>
                                    </div>
                                    {/* <img src="./images/icon emojione-star.png" alt="image" height={16} width={16} style={{ objectFit: "contain" }}/> */}
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Department