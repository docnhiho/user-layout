import styled from 'styled-components';
import sreach from '../../assets/sreach.svg';
import { ReactComponent as Account} from '../../assets/account.svg';

import { ReactComponent as Shoping } from '../../assets/shoping.svg';
import imageproduct from '../../assets/image-product.svg'

const HeaderStyle = styled.div`

    .topheader{
        width: 1320px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 70px;


    
    }
    .shop{
         path{
            fill: white 
        }
    }
    .topheader span{
        padding: 12px;
        font-size: 18px;
        line-height: 21px;

    }
    .topheader p{
        font-family: 'AmstelvarAlpha', sans-serif;
        font-size: 42px;
        line-height: 50px;
    }
    .main-header{
        height: 562px;
        width: 1226px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        font-family: 'AmstelvarAlpha', sans-serif;
    }
    .main-header-content{
        width: 686px;
        height: 364px;
    }
    .main-header p:nth-child(1){
        font-family: 'Roboto', sans-serif;
        font-size: 74px;
        line-height: 55px;
        font-weight: lighter;
    }
    .main-header p:nth-child(2){
        font-family: 'Roboto', sans-serif;
        font-size: 30px;
        line-height: 55px;
        text-transform: capitalize;
    }
    .main-header-content button{
        width: 223px;
        height: 72px;
        color: white;
        font-size: 29px;
        line-height: 34px;
        background-color: black;
    }
`;
const Headerr = () => {
    return (
        <HeaderStyle>
            <div className='topheader'>
                <img src={sreach} alt='sreach'></img>
                <p>Lisa Store</p>
                <div style={{ display: 'flex' }}>
                    <div>
                        <Account style={{ marginBottom: '-6px' }}></Account>
                        <span>Account</span>
                    </div>
                    <div className='shoping'>
                        <Shoping style={{ marginBottom: '-6px' }} ></Shoping>
                        <span>Shoping</span>
                    </div>

                </div>
            </div>
            <div className='main-header'>
                <div className='main-header-content'>
                    <p >Collections</p>
                    <p>you can explore ans shop many differnt collection
                        from various barands here.</p>
                    <button> <Shoping className='shop'></Shoping>Shop now</button>
                </div>
                <img src={imageproduct}></img>

            </div>
        </HeaderStyle>

    )
}
export default Headerr;
