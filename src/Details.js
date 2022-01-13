// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
// import './Details.css'

// function Details() {

//   const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));


//   return (
//     <div className="details__container">
//       <Grid containter spacing={2}>
//         <Grid item xs={8}>
//           <Item>xs=8</Item>
//           <Item>xs=8</Item>
//         </Grid>
//         <Grid item xs={2}>
//         </Grid>
//       </Grid>
//     </div>
//   )
// }

// export default Details

import * as React from 'react';
import './Details.css'
import { Container } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { StyledButton } from './styles';

export default function BasicGrid() {
  return (
    <div className='details__container'>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h5 className='details__title'>BALANCE DETAILS</h5>
            <h4>$2,128,022.00</h4>
            <div>
              <ArrowCircleDownIcon />{" "}
              <span className='details__number'>$3,256.00</span>{" "}
              <ArrowCircleUpIcon />{" "}
              <span className='details__number'>$3,256.00</span>{" "}
            </div>
            <div className='details__buttonContainer'>
              <StyledButton color="aqua">Receice</StyledButton>
              <StyledButton color="blue">Send</StyledButton>
            </div>
          </Col>
          <Col className='details__secondColumn'>            
          </Col>
        </Row>
      </Container>
    </div>
  );
}
