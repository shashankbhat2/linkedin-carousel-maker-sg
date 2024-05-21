import React, { useEffect } from 'react'
import CarouselCanvas from './carousel-canvas'
import { Button } from '../ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import CarouselDesignTab from './design-tab'
import SlidesTab from './slides-tab'
import { IPost } from '@/type'

type Props = {
  post: IPost
}

const CarouselEditor = ({ post }: Props) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const handleNextSlide = () => {
    if (currentSlide < post.template.carousel?.slides?.length! - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleSlideSelect = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  return (
    <div className='flex flex-col-reverse md:flex-row h-full min-h-screen'>
      <div className="flex flex-col flex-1 md:border-r overflow-x-hidden overflow-y-scroll max-h-screen  w-full">
        <Tabs defaultValue="design" className="w-full flex-col flex">
          <TabsList className="flex w-auto h-[45px] justify-start gap-4 bg-transparent border-b rounded-none">
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="slides">Slides</TabsTrigger>
          </TabsList>
          <TabsContent value="design">
            <CarouselDesignTab carouselSettings={post.template.carousel?.common_settings!} />
          </TabsContent>
          <TabsContent value="slides" className='p-0 mt-0'>
            <SlidesTab selectedSlide={currentSlide} handleSlideSelect={handleSlideSelect} carouselSlides={post.template.carousel?.slides!} />
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex flex-1 flex-grow md:basis-1/5 gap-2 flex-col overflow-hidden bg-slate-100 justify-center items-center">
        <div className="flex w-auto">
          <CarouselCanvas slide={post.template.carousel?.slides[currentSlide]!} commonSettings={post.template.carousel?.common_settings!} />
        </div>
        <div className="flex items-center my-4 justify-center gap-4 font-semibold">
          <Button disabled={currentSlide === 0 } variant="outline" onClick={handlePrevSlide} className='rounded-full'>
            <ArrowLeft size={24} />
          </Button>
          <span>
            Slide {currentSlide + 1}  of {post.template.carousel?.slides?.length} 
          </span>
          <Button disabled={currentSlide === post.template.carousel?.slides?.length! - 1} variant="outline" onClick={handleNextSlide}  className='rounded-full'>
            <ArrowRight size={24} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CarouselEditor