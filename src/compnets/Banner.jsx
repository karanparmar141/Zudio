import React from 'react'
import { Container } from 'react-bootstrap'

const Banner = () => {
  return (
    <>
    <section >
      <swiper-container class="mySwiper" space-between="30" loop="true" autoplay-delay="2500">
        <swiper-slide>
            <img src="https://www.zudio.com/cdn/shop/files/3-AW_23_ZSTORIES_DENIM_74fefb64-8df9-438f-94aa-fb6105d74d41.jpg?v=1692879696" alt="" />
        </swiper-slide>
        {/* <swiper-slide>
            <img src="https://www.zudio.com/cdn/shop/files/2-AW_23_ZSTORIES_DENIM_2f8e4938-529d-4b8d-a084-a50e9b2e1256.jpg?v=1692879682" alt="" />
        </swiper-slide> */}
      </swiper-container>
  </section>
    </>
  )
}

export default Banner