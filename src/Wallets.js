import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Wallets.css'
import CardContents from './CardContents';
import { WalletWrapper } from './styles';
import BitCoin from "./images/bitcoin.png";
import Ripple from "./images/ripple.png";
import Tether from "./images/tether.png";
import Trading from './Trading';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StreamIcon from '@mui/icons-material/Stream';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';


function Wallets() {
  return (
    <div className='wallet__container'>
      <Row>
        <Col sm={7}>
          <div className='wallet__headings'>
            <h4>WALLETS</h4>
            <h4 className='wallets__moreTitle'>
              More
              <ChevronRightOutlinedIcon />
            </h4>
          </div>

          <WalletWrapper>
            <CardContents
              Icon={MonetizationOnIcon}
              background="darkorange"
              name="Bitcoin"
              amount="$3,256.00"
              quantity="3,3015477645 BTC"
            />
            <CardContents
              Icon={StreamIcon}
              background="lightblue"
              name="Streamex"
              amount="$1,123.00"
              quantity="23.0356465 STE"
            />
            <CardContents
              background="steelblue"
              imageSrc={Ripple}
              name="Ripple"
              amount="$2,789.00"
              quantity="3,3015477645 XRP"
            />
            <CardContents
              background="lightgreen"
              Icon={AttachMoneyIcon}
              name="Tether"
              amount="$1,523.00"
              quantity="1,3157645 USDT"
            />
          </WalletWrapper>
        </Col>
        <Col sm={1} />
        <Col sm={4}>
          <div className='wallet__headings'>
            <h4>TRADING FEES</h4>
            <h4 className='wallets__moreTitle'>
              More
              <ChevronRightOutlinedIcon />
            </h4>
          </div>
          <Trading />
        </Col>
      </Row>
    </div>
  )
}

export default Wallets
