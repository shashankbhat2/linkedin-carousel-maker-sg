import React from 'react'

type Props = {
  id: string
}

const CarouselEditor = ({ id }: Props) => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className="flex flex-1">
        <h1>Design</h1>
      </div>
      <div className="flex flex-1 bg-slate-100">
        <h1>Preview</h1>
      </div>
    </div>
  )
}

export default CarouselEditor