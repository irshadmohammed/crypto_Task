import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Transactions.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Wrapper } from './styles';
import Security from './Security';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

function Transactions() {
  return (
    <div className='transactions__container'>
      <Row>
        <Col sm={4}>
          <div className='transactions__headings'>
            <h4>TRANSACTIONS</h4>
            <h4 className='transactions__moreTitle'>
              More
              <ChevronRightOutlinedIcon />
            </h4>
          </div>
          <Wrapper>
            <div className='transactions__square'>
              <span className='transactions__arrow'>
                <ArrowUpwardIcon color="primary" />
              </span>
            </div>
            <div className='transactions__subHead'>
              <span className='transactions__Heading'>Sent USDT</span>
              <span style={{ color: "lightgray" }}>23 Feb 2020</span>
            </div>
            <span className='transactions__titles'>- $1,678.00</span>
          </Wrapper>

          <Wrapper top>
            <div className='transactions__square'>
              <span className='transactions__arrow'>
                <ArrowDownwardIcon color="warning" />
              </span>
            </div>
            <div className='transactions__subHead'>
              <span className='transactions__Heading'>Received USDT</span>
              <span style={{ color: "lightgray" }}>23 Feb 2020</span>
            </div>
            <span style={{ color: "aqua" }} className='transactions__titles'>+ $1,098.00</span>
          </Wrapper>
        </Col>
        <Col sm={4}>
          <div className='transactions__headings'>
            <h4>SECURITY</h4>
            <h4 className='transactions__moreTitle'>
              More
              <ChevronRightOutlinedIcon />
            </h4>
          </div>
          <Security />
        </Col>
      </Row>
    </div>
  )
}

export default Transactions

{/* <span className='transactions__arrow'>
  <ArrowUpwardIcon color="primary" />
</span>
<div>
  <span className='transactions__Heading'>Sent USTD</span>
  <span>$1,678.00</span>
</div> */}