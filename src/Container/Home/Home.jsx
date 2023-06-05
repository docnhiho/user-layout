import { styled } from 'styled-components';
import brand1 from '../../assets/01.svg';
import brand2 from '../../assets/02.svg';
import brand3 from '../../assets/03.svg';
import brand4 from '../../assets/04.svg';
import brand5 from '../../assets/05.svg';
import img1 from '../../assets/img1.svg';
import img2 from '../../assets/img2.svg';
import img3 from '../../assets/img3.svg';
import img4 from '../../assets/img4.svg';
import img5 from '../../assets/img5.svg';
import pro1 from '../../assets/product1.svg';
import pro2 from '../../assets/product2.svg';
import pro3 from '../../assets/product3.svg';
import pro4 from '../../assets/product4.svg';

import filter from '../../assets/filter.svg';


import { Col, Row, Space } from 'antd';
import { NavLink } from 'react-router-dom';


const ContentStyle = styled.div`
.brand{
    padding-top: 50px;
    padding-bottom: 50px;
    width: 1320px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.content{
    width: 1320px;
    margin: 0 auto;

}
.transformp {
    transform: rotate(-90deg);
    position: absolute;
    font-size:39px ;
    line-height: 42px;
    top: 34%;
    left: -42%;
}

.grid-product{
    width: 1320px;
    margin: 0 auto;
}

.grid-product p{
    font-size: 50px;
    line-height: 59px;
}
.list-group-item{
    font-family: 'Poppins', sans-serif;
    color: rgba(0, 0, 0, 0.5);
    font-size: 16px;
    line-height: 22px;
    margin-right: 40px;

}
.grid-product button {
    width: 92px;
    height: 32px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;

const Home = () => {
    return (
        <ContentStyle>
            <div className='brand'>
                <img src={brand1} alt=''></img>
                <img src={brand2} alt=''></img>
                <img src={brand3} alt=''></img>
                <img src={brand4} alt=''></img>
                <img src={brand5} alt=''></img>
            </div>

            <div className="content">
                <Row gutter={16}>
                    <Col className="gutter-row " style={{ position: 'relative' }} span={12}>
                        <img src={img4} alt="" />
                        <p className='transformp'>Explore new and popular styles</p>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Row gutter={[16, 24]}>
                            <Col className="gutter-row" span={12}>
                                <img src={img1} alt="" />
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <img src={img2} alt="" />
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <img src={img3} alt="" />
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <img src={img5} alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

            <div className="grid-product">
                <p>Or subscribe to the newsletter</p>
                <nav className='nav-menu'>
                    <NavLink to="/" className="list-group-item">All products</NavLink>
                    <NavLink to="/" className="list-group-item">T-Shirt</NavLink>
                    <NavLink to="/" className="list-group-item">Hoodies</NavLink>
                    <NavLink to="/" className="list-group-item">Jacket</NavLink>
                    <button style={{ float: 'right' }}>
                        <img src={filter}></img>
                        Fliter
                    </button>
                </nav>
                <div className="product">
                    <Space>
                        <Row gutter={[16, 24]}>
                            <Col className="gutter-row" span={6}>
                                <img src={pro1} alt="" />    
                                <p>Adicolor Classics Joggers</p>
                                <div>
                                    <p>Dress</p>
                                    <p>$63.85</p>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <img src={pro2} alt="" />
                                <div>col-6</div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <img src={pro3} alt="" />
                                <div>col-6</div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <img src={pro4} alt="" />
                                <div>col-6</div>
                            </Col>
                        </Row>
                    </Space>

                </div>
            </div>
        </ContentStyle>
    )
}

export default Home;