import React from 'react'
import { Card, CardContent } from './card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { IPreset } from '@/type';



type Props = {
    template: IPreset
}

const CarouselCard = ({ template }: Props) => {
    const { name, previewImages } = template;

    return (
        <Card className='p-0 overflow-hidden cursor-pointer'>
            <Carousel>
                <CarouselContent className='gap-0'>
                    {previewImages.map((image, index) => (
                        <CarouselItem key={index}>
                            <img src={image} alt="carousel" className="w-full h-full object-cover" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

        </Card>
    )
}

export default CarouselCard