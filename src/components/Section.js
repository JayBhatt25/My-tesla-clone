import React from 'react'
import styled from 'styled-components'

function Section() {
    return (
        <div className='section'>
            <Wrap>
                <Producttext>
                    <h1>Model S</h1>
                    <p>Order online for Touchless Delivery</p>
                </Producttext>

                <Btns>
                    <Buttongrp>
                        <Leftbtn>
                            Custom Order
                        </Leftbtn>
                        <Rightbtn>
                            Existing inventory
                        </Rightbtn>
                    </Buttongrp>
                    <Dwnarrow src = "images/down-arrow.svg">

                    </Dwnarrow>
                </Btns>
                
            </Wrap>
        </div>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;



`

const Producttext = styled.div`
    padding-top: 15vh;
    text-align: center;

`

const Buttongrp = styled.div`
    
   display: flex;
   align-items: center;
   margin-bottom: 70px;
   margin-left: auto;
   margin-right: auto;
    

`

const Leftbtn = styled.div`
    height: 40px;
    width: 256px;
    background-color: rgba(52,53,58,0.8);
    color: white;
    display: flex;
    justify-content: center;
    border-radius: 100px;
    opacity: 0.85;
    align-items: center;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 14px;
   

`
const Rightbtn = styled(Leftbtn)`
    background-color:rgb(223,221,220);
    color: black;
    margin-left: 30px;
`
const Btns = styled.div`
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
justify-content: center;

`

const Dwnarrow = styled.img`
    margin-bottom: 20px; 
    height: 40px;
    animation: downanimated infinite 1.5s;
   
`