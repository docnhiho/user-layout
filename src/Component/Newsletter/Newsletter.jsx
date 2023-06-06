import { styled } from "styled-components"
import { Col, Divider, Row } from 'antd';
import let1 from '../../assets/image-product-8.svg';
import let2 from '../../assets/image-product-9.svg';
import let3 from '../../assets/image-product-10.svg';
import let4 from '../../assets/image-product-11.svg';
import let5 from '../../assets/image-product-12.svg';
import let6 from '../../assets/image-product-13.svg';



const NewsletterStyle = styled.div`
    padding-top: 40px;
    width: 1320px;
    margin: 0 auto;
 .subscribe {
    font-size: 50px;
    line-height: 59px;
    text-align: center;
    font-weight: bold;
    text-transform: capitalize;
}
.lisa{
    margin-top: 60px;
    padding-bottom: 100px;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    text-transform: capitalize;
    color: #FF6F61;
}
`;

const Newsletter = () => {
    return (
        <NewsletterStyle>
            <p className='subscribe'>Follow products and discounts on Instagram</p>
            <Row gutter={16}>
                <Col className="gutter-row" span={4}>
                    <img src={let1} alt=""></img>
                </Col>
                <Col className="gutter-row" span={4}>
                    <img src={let2} alt=""></img>
                </Col>
                <Col className="gutter-row" span={4}>
                    <img src={let3} alt=""></img>
                </Col>
                <Col className="gutter-row" span={4}>
                    <img src={let4} alt=""></img>
                </Col>
                <Col className="gutter-row" span={4}>
                    <img src={let5} alt=""></img>
                </Col>
                <Col className="gutter-row" span={4}>
                    <img src={let6} alt=""></img>
                </Col>
            </Row>
            <p className="lisa">@Lisa.Official</p>
        </NewsletterStyle>
    )
}
export default Newsletter