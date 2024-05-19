import CarouselTemplatesContainer from '@/components/containers/carousel-templates'
const Carousels = () => {
  return (
    <div className='mx-4 md:container md:mx-auto flex flex-col gap-3 overflow-y-auto py-5'>
      <div className="flex flex-col gap-2 mt-4">
        <h1 className='text-xl font-medium'>Carousel Maker</h1>
        <p className='text-sm'>Design high-performing LinkedIn carousel posts in minutes.</p>
      </div>
      <CarouselTemplatesContainer />
    </div>
  )
}

export default Carousels