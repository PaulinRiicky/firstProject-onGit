import React from 'react'
import Card from '../Card'
import ImgNoir from '../img/noir.png'
import ImgRhino from '../img/rhino.png'
import ImgOhara from '../img/ohara.png'
import ImgVenom from '../img/venom.png'

function index() {
  return (
    <div>
      <Card className="Noir" imagem={ImgNoir}/>
      <Card className="Rhino" imagem={ImgRhino}/>
      <Card className="Ohara"imagem={ImgOhara}/>
      <Card className="Venom"imagem={ImgVenom}/>
    </div>
  )
}

export default index