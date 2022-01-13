import React from 'react';
import './Trading.css';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { DivContainer } from './styles';
import { ProgressBar } from 'react-bootstrap';

function Trading() {
  return (
    <>
      <DivContainer className='trading__container'>
        <CompareArrowsIcon fontSize="large" style={{ color: 'blue' }} className='trading__arrowIcon' />
        <span>0.069 %</span>
        <ProgressBar variant='info' className="trading__progressOne" now={50} />
      </DivContainer>
      <DivContainer padding className='trading__container'>
        <CompareArrowsIcon fontSize="large" style={{ color: 'blue' }} className='trading__arrowIcon' />
        <span>0.075 %</span>
        <ProgressBar variant='warning' className="trading__progressOne" now={80} />
      </DivContainer>
    </>
  )
}

export default Trading
