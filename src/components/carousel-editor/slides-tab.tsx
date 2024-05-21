import { Slide } from '@/type'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import { Button } from '../ui/button';
import { Fragment } from 'react/jsx-runtime';
import { PlusCircle, Trash } from 'lucide-react';
import { Badge } from '../ui/badge';

type Props = {
  carouselSlides: Slide[]
  handleSlideSelect: (index: number) => void
  selectedSlide: number
}

const ElementRenderer = ({ element }: any) => {
  switch (element.type) {
    case 'text':
      return (
        <div className="flex flex-col gap-2">
          <label htmlFor="text" className='text-xs font-bold text-muted-foreground'>
            {element.label}
          </label>
          <Input
            type="text"
            value={element.value}
            maxLength={element.max_words}
          />
        </div>

      );
    case 'multiline':
      return (
        <div className="flex flex-col gap-2">
          <label htmlFor="text" className='text-xs font-bold text-muted-foreground'>
            {element.label}
          </label>
          <Textarea
            value={element.value}
            className='w-full'
            maxLength={element.max_words}
          />
        </div>
      );
    case 'image':
      console.log(element.value)
      return (
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="text" className='text-xs font-bold text-muted-foreground'>
            {element.label}
          </label>
          {element.value ? (
            <div className='w-[75px] h-[75px] overflow-hidden rounded-md relative' >
              <img src={element.value} alt="Uploaded" className='object-cover' />
              <button className='absolute top-0 left-0 m-1 z-10'>
                <Trash size={24} color='red' fill='red' />
              </button>
            </div>
          ) : (
            <div style={{ width: '100%', height: '150px', border: '1px dashed grey', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Upload Area
            </div>
          )}
        </div>
      );
    default:
      return <p>Unsupported element type</p>;
  }
};

const SlidesTab = ({ carouselSlides, handleSlideSelect, selectedSlide }: Props) => {
  return (
    <div className="flex flex-col gap-0">
      {carouselSlides.map((slide, index) => (
        <Fragment key={index}>
          <Card className={`p-2 rounded-none cursor-pointer border-none shadow-none flex flex-col gap-2 ${index === selectedSlide ? 'bg-slate-200' : 'bg-white'} `} onClick={() => handleSlideSelect(index)}>
            <div className="flex justify-between items-center">
              <Badge className={`h-6 ${index === selectedSlide ? 'bg-slate-500' : 'bg-slate-400'}`}>Slide {index + 1}</Badge>
              <div className="flex gap-1">
                <Button
                 variant="ghost"
                  className='text-red-400 p-1 hover:text-red-500'>
                  <Trash size={16} />
                </Button>
                {index !== carouselSlides.length - 1 && (
                  <Button
                    variant="ghost"
                    className="p-1 transition-colors"
                  >
                    <PlusCircle size={16} />
                  </Button>
                )}
              </div>

            </div>
            {slide.elements.map((element, i) => (
              <ElementRenderer key={i} element={element} />
            ))}
          </Card>
        </Fragment>
      ))}

    </div>
  )
}

export default SlidesTab