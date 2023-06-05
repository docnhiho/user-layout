import { Col, } from 'antd';
import { styled } from 'styled-components';

const ProductStyle = styled.div`
 font-family: 'Open Sans';
 text-transform: capitalize;
.name{
    font-size: 16px;
    margin-top: 18px;
    margin-bottom: 16px;
}
.cateprice{
    display: flex;
    justify-content: space-between;
}
.cate{
    font-size: 16px;
    color: #000000;
    opacity: 0.5;
    margin-top: 0;
}
.price{
    margin-top: 0;
    font-weight: 600;
    font-size: 16px;
    color: #000000;
}
`;

const Product = ({ image, name, category, price, ...rest }) => {
    return (
        <Col className="gutter-row" span={6}>
            <ProductStyle>
                <img src={image} alt="" />
                <p className='name'>{name}</p>
                <div className='cateprice'> 
                    <p className='cate'>{category}</p>
                    <p className='price'>${price}</p>
                </div>
            </ProductStyle>

        </Col>
    )
}
export default Product