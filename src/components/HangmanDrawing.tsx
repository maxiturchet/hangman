import React from 'react';
import HeadGoku from '../../public/assets/cabeza(1).png'
import BodyGoku from '../../public/assets/cuerpo(2).png'
import RightArmGoku from '../../public/assets/brazo-derecho(3).png'
import LeftArmGoku from '../../public/assets/brazo-izquierdo(4).png'
import RightLegGoku from '../../public/assets/pierna-derecha(5).png'
import LeftLegGoku from '../../public/assets/pierna-izquierda(6).png'
const HangmanDrawing = () => {

  const Head = (
    <img src={HeadGoku} alt='head'/>
  )
  const Body = (
    <img src={BodyGoku} alt='body'/>
  )
  const RightArm = (
    <img src={RightArmGoku} alt='right-arm'/>
  )
  const LeftArm = (
    <img src={LeftArmGoku} alt='left-arm'/>
  )
  const RightLeg = (
    <img src={RightLegGoku} alt='right-leg'/>
  )
  const LeftLeg = (
    <img src={LeftLegGoku} alt='left-leg'/>
  )

  return (
    <div className='relative'>
      <div className='relative '>
        <div className='hidden w-[400px] absolute top-0 right-[-200px]'>{Head}</div>
        <div className='hidden w-[400px] absolute top-0 right-[-200px]'>{Body}</div>
        <div className='hidden w-[400px] absolute top-0 right-[-200px]'>{RightArm}</div>
        <div className='hidden w-[400px] absolute top-0 right-[-200px]'>{LeftArm}</div>
        <div className='hidden w-[400px] absolute top-0 right-[-200px]'>{RightLeg}</div>
        <div className=' w-[400px] absolute top-0 right-[-200px]'>{LeftLeg}</div>
      </div>
      
      <div className='h-[50px] w-[10px] bg-black z-10 absolute top-0 right-0'/>
      <div className='h-[10px] w-[200px] bg-black ml-[120px]' />
      <div className='h-[400px] w-[10px] bg-black ml-[120px]' />
      <div className='h-[10px] w-[250px] bg-black' /> 
      
    </div>
  )
}

export default HangmanDrawing