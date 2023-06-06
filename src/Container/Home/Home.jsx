import { styled } from 'styled-components';
import brand1 from '../../assets/01.svg';
import brand2 from '../../assets/02.svg';
import brand3 from '../../assets/03.svg';
import brand4 from '../../assets/04.svg';
import brand5 from '../../assets/05.svg';
import pro1 from '../../assets/product1.svg';
import pro2 from '../../assets/product2.svg';
import pro3 from '../../assets/product3.svg';
import pro4 from '../../assets/product4.svg';
import background from '../../assets/background.svg'
import { ReactComponent as Zara } from '../../assets/Zaralogo.svg'
import { ReactComponent as Zara2 } from '../../assets/zara2.svg';
import filter from '../../assets/filter.svg';
import MultipleItems from '../../Component/MultipleItems';
import Content from '../../Component/Content';
import Product from '../../Component/Product';
import Newsletter from '../../Component/Newsletter';
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

`;
const GridProduct = styled.div`
    width: 1320px;
    margin: 0 auto;

 .subscribe {
    font-size: 50px;
    line-height: 59px;
    text-align: center;
    font-weight: bold;
}
.list-group-item{
    font-family: 'Poppins', sans-serif;
    color: rgba(0, 0, 0, 0.5);
    font-size: 16px;
    line-height: 22px;
    margin-right: 40px;

}
button {
    width: 92px;
    height: 32px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;
const BannerStyle = styled.div`
    position: relative;
    margin: 0 auto;
    //width: 1320px;
    .img{
        width: 100%;
    }
    .zara{
        position: absolute;
        top: 3%;
        left: 65%;
        width: 732px;
    }
    .zara2{
        position: absolute;
        top: 24%;
        left: 57%;
        width: 162px;
    }
    .paragraph{
        position: absolute;
        width: 363px;
        height: 184px;
        font-family: 'Roboto', sans-serif;
        font-size: 17px;
        line-height: 40px;
        top: 40%;
        left: 57%;
        color: rgba(255, 111, 97, 1);
        text-transform: capitalize;
    }
    .btn{
        position: absolute;
        font-family: 'Roboto', sans-serif;
        width: 221px;
        height: 56px;
        background-color: white;
        font-size: 23px;
        line-height: 34px;
        top: 64%;
        left: 57%;
    }
`;

const NewletterStyled = styled.div`
    background-color: #F0F0F0;

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
            <Content></Content>
            <GridProduct>
                <p className='subscribe'>Or subscribe to the newsletter</p>
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
                            <Product image={pro1} name={"Nike Repel Milssssssssssssssser"} category={"Dress"} price={63.85} />
                            <Product image={pro2} name={"Nike Repel Miler"} category={"Dress"} price={63.85} />
                            <Product image={pro3} name={"Nike Repel Miler"} category={"Dress"} price={63.85} />
                            <Product image={pro4} name={"Nike Repel Miler"} category={"Dress"} price={63.85} />
                        </Row>
                    </Space>
                </div>
            </GridProduct>
            <BannerStyle>
                <img className='img' src={background} alt=''></img>
                <Zara className="zara"></Zara>
                <Zara2 className="zara2"></Zara2>
                <p className='paragraph '>
                    Lustrous yet understated. The new evening wear collection exclusively offered at the reopened Giorgio Armani boutique in Los Angeles.
                </p>
                <button className='btn'>See Collection</button>
            </BannerStyle>

            <GridProduct>
                <p className='subscribe'>Best Seller</p>
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
                    {/* <Space>
                        <Row gutter={[16, 24]}>
                            <Product image={pro1} name={"Nike Repel Milssssssssssssssser"} category={"Dress"} price={63.85} />
                            <Product image={pro2} name={"Nike Repel Miler"} category={"Dress"} price={63.85} />
                            <Product image={pro3} name={"Nike Repel Miler"} category={"Dress"} price={63.85} />
                            <Product image={pro4} name={"Nike Repel Miler"} category={"Dress"} price={63.85} />
                        </Row>
                    </Space> */}
                    <MultipleItems></MultipleItems>
                </div>
            </GridProduct>
            <NewletterStyled>
                <Newsletter></Newsletter>
            </NewletterStyled>
        </ContentStyle>
    )
}

export default Home;