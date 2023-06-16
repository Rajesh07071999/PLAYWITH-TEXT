import React, { useState } from 'react'


export default function About() {

    const [mystyle, SetMyStyle] = useState({
        color : 'white',
        backgroundColor : 'black'
    })

    const Togglecolor = ()=>{
        if (mystyle.color === 'white') {
            SetMyStyle({
                color : 'black',
                backgroundColor : 'white'         
            })
            
        } else {
            SetMyStyle({
                color : 'white',
                backgroundColor : 'black'
            })
        }
        
    }
    return (
        <div className='container' style={mystyle}>
            <div id="accordion" style={mystyle} >
                <h1>About Us</h1>
                <div className="card" style={mystyle}>
                    <div className="card-header" id="headingOne" style={mystyle}>
                        <h5 className="mb-0" style={mystyle}>
                            <button style={mystyle} className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                               1
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" style={mystyle} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body" style={mystyle}>
                           <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="card" style={mystyle}>
                    <div className="card-header" id="headingTwo" style={mystyle}>
                        <h5 className="mb-0" style={mystyle}>
                            <button style={mystyle} className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                2
                            </button>
                        </h5>
                    </div>
                    <div style={mystyle} id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body" style={mystyle}>
                            <img src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg" alt="" />
                           </div>
                    </div>
                </div>
                <div className="card" style={mystyle}>
                    <div className="card-header" id="headingThree" style={mystyle}>
                        <h5 className="mb-0" style={mystyle}>
                            <button style={mystyle} className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                3
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" style={mystyle} className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body" style={mystyle}>
                            <img src="https://cache.desktopnexus.com/thumbseg/1909/1909269-bigthumbnail.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn btn-success my-3' onClick={Togglecolor}>Toggle Mode</button>
        </div>
    )
}
