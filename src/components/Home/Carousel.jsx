import React from 'react'
import 'antd/dist/antd.min.css'

import { Carousel } from 'antd';

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function Slider() {



  return (
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img src='https://a.storyblok.com/f/40131/1920x500/b8f89587a4/header_service_support.jpg/m/1920x0/filters:format(webp)'></img></h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
  )
}

export default Slider