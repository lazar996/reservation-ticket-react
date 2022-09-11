import React from 'react'
import 'antd/dist/antd.min.css'

import { Carousel } from 'antd';
import ReservationForm from '../Reservation Ticket/ReservationForm';
import styled from 'styled-components';

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function Slider() {



  return (
    <Block>
    <Wrapp>
    <ReservationForm/>
    </Wrapp>
    <WrappC>
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img src='https://spiritairindia.com/wp-content/uploads/2021/08/Plane-1.jpg'></img></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src='https://cdn.egu.eu/media/filer_public_thumbnails/filer_public/c8/8d/c88d0555-5266-4f21-a332-6533e99e9938/47137926741_c8446fbc04_o.jpg__1920x500_q90_crop_subject_location-2475%2C1589_subsampling-2_upscale.jpg'></img></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src='https://cdn-images.zety.com/pages/pilot_resume_example_1.jpg'></img></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src='https://pasijetcenter.com/wp-content/uploads/2016/03/header.jpg'></img></h3>
    </div>
  </Carousel>
  </WrappC>
  </Block>
  )
}


const Block = styled.div`
    position: relative;
    left:0;
  right:0;
  
`

const Wrapp = styled.div`
    position: absolute;
    left:0;
  right:0;
    z-index: 10;
    padding-top: 10px;

`

const WrappC = styled.div`
      
    
`

export default Slider