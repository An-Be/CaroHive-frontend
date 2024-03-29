import React from 'react';
import './Banner.scss';
import { useHeader } from '../../hooks/useHeader';

const Banner = () => {
  const {navBarTransparentClass}  = useHeader();

  return (
    <div className={`Banner sticky top-0 navbar z-10 h-5 bg-slate-50 ${navBarTransparentClass}`}>
        <h1 className='Banner__header'>Summer Sale coming Up!</h1>
        <span className='Banner__sale'>All items will be 20% off!</span>
    </div>
  )
}

export default Banner