import { styled } from 'styled-components';
import img1 from '../../assets/img1.svg';
import img2 from '../../assets/img2.svg';
import img3 from '../../assets/img3.svg';
import img4 from '../../assets/img4.svg';
import img5 from '../../assets/img5.svg';
import { Col, Row } from 'antd';

const ContentStyle = styled.div`
    width: 1320px;
    margin: 0 auto;
    .transformp {
    transform: rotate(-90deg);
    position: absolute;
    font-size:39px ;
    line-height: 42px;
    top: 34%;
    left: -42%;
}
`;

 const Content = () => {
    return(
        <ContentStyle>
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
    </ContentStyle>
    )
   
}

export default Content;