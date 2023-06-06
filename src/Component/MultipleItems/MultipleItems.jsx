import React, { Component } from "react";
import Slider from "react-slick";
import pro1 from '../../assets/product1.svg';
import pro2 from '../../assets/product2.svg';
import pro3 from '../../assets/product3.svg';
import pro4 from '../../assets/product4.svg';
import { styled } from "styled-components";

const SampleNextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />


  );
}

const Products = ({ image, name, category, price, ...rest }) => {
  return (
    <>
      <img src={image} alt="" />
      <p className='name'>{name}</p>
      <div className='cateprice'>
        <p className='cate'>{category}</p>
        <p className='price'>${price}</p>
      </div>
    </>
  )
}

const ItemStyle = styled.div`
`;

const MultipleItems = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };
  return (
    <ItemStyle>
      <h2> Single Item</h2>
      <Slider {...settings}>

        <Products image={pro1} name={"Nike Repel Milssssssssssssssser"} category={"Dress"} price={63.85} />
        <Products image={pro2} name={"Nike Repel Milssssssssssssssser"} category={"Dress"} price={63.85} />
        <Products image={pro3} name={"Nike Repel Milssssssssssssssser"} category={"Dress"} price={63.85} />
        <Products image={pro4} name={"Nike Repel Milssssssssssssssser"} category={"Dress"} price={63.85} />
        <Products image={pro2} name={"Nike Repel Milssssssssssssssser"} category={"Dress"} price={63.85} />
        <Products image={pro3} name={"Nike Repel Milssssssssssssssser"} category={"Dress"} price={63.85} />
      </Slider>
    </ItemStyle>
  );
}

export default MultipleItems;
