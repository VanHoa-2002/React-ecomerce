import React from 'react'
import './style.css'
const Wrapper = () => {
    const data = [
        {
          cover: <i className='fa-solid fa-truck-fast'></i>,
          title: "Worldwide Delivery",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i className='fa-solid fa-id-card'></i>,
          title: "Safe Payment",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i className='fa-solid fa-shield'></i>,
          title: "Shop With Confidence ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i className='fa-solid fa-headset'></i>,
          title: "24/7 Support ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
      ]
  return (
    <>
        <section className="wrapper background">
            <div className="container grid2">
                {
                    data.map((val,index)=>{
                        return(
                            <React.Fragment key={index}>
                                <div className="product" key={index}>
                                    <div className="img icon-circle">
                                        <i>{val.cover}</i>
                                    </div>
                                    <h3>
                                    <i>{val.title}</i>
                                    <p>{val.decs}</p>
                                    </h3>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </section>
    </>
    )
}

export default Wrapper