import { CommonSettings } from '@/type'
import { Button } from '@/components/ui/button'
import { Plus, Trash, Trash2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

type Props = {
  carouselSettings: CommonSettings
}

const CarouselElementRenderer = ({ element }: any) => {
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
          />
        </div>
      )
    case 'color':
      return (
        <div className="flex flex-col gap-2">
          <label htmlFor="text" className='text-xs font-bold text-muted-foreground'>
            {element.label}
          </label>
          <Input
            type="text"
            value={element.value}
          />
        </div>
      );
    case 'multiline':
      return (
        <div className="flex flex-col gap-2">
          <label htmlFor="text" className='text-xs font-bold text-muted-foreground'>
            {element.label}
          </label>
        </div>
      );
    case 'logo':
      return (
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="text" className='text-xs font-bold text-muted-foreground'>
            {element.label}
          </label>
          {element.value ? (
            <div className="flex gap-2 items-center">
              <div className='w-[75px] h-[75px] overflow-hidden rounded-md relative' >
                <img src={element.value.image} alt="Uploaded" className='h-full w-full object-cover' />
              </div>
              <button>
                <Trash2 size={24} color='red' />
              </button>
            </div>

          ) : (
            <div style={{ width: '100%', height: '150px', border: '1px dashed grey', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Upload Area
            </div>
          )}
        </div>
      );
    case 'background':
      return (
        <Tabs defaultValue="solid" className="w-full flex-col flex gap-2">
          <label htmlFor="text" className='text-xs font-bold text-muted-foreground'>
            {element.label}
          </label>
          <TabsList className="flex w-auto h-[45px] justify-start gap-4 bg-transparent border-b rounded-none">
            <TabsTrigger value="solid">Solid</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
          </TabsList>
          <TabsContent value="solid" className='flex flex-col gap-2'>
            <div className="flex justify-between gap-2 w-full">
              {element.value.color_options.map((color: any, i: number) => (
                <button key={i} className="flex gap-2 w-[50px] border rounded-md h-[30px] items-center" style={{ backgroundColor: color }}>
                </button>
              )
              )}
            </div>
            <Input
              type="text"
              value={element.value.color}
            />
          </TabsContent>
          <TabsContent value="images" className='mt-0 flex flex-col gap-2 p-0'>
            <div className="flex flex-col gap-2">
              <h1 className='text-xs font-bold text-muted-foreground'>
                Image(Recommended: 1200x1500)          </h1>
              <Button variant="outline" className='w-full md:w-1/2'>
                Select Image
              </Button>
            </div>
            <div className="flex gap-2">
              {element.value.image_options.map((image: any, i: number) => (
                <button key={i} className='w-[75px] h-[75px] overflow-hidden rounded-md relative' >
                  <img src={image.image} alt="Uploaded" className='h-full w-full object-cover' />
                </button>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      ) 
    case 'font':
      return (
        <div className="flex flex-col gap-2">
          <label htmlFor="text" className='text-xs font-bold text-muted-foreground'>
            {element.label}
          </label>
          <Select disabled>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a font" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Instrument Serif" style={{fontFamily: "Instrument Serif"}}>Instrument Serif</SelectItem>
                <SelectItem value="Instrument Serif" style={{fontFamily: "Instrument Sans"}}>Instrument Sans</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )
    default:
      return <p>Unsupported element type</p>;
  }
};


const CarouselDesignTab = ({ carouselSettings }: Props) => {
  return (
    <div className='flex flex-col p-4 gap-4'>
      <div className="flex flex-col gap-2">
        <h1 className='text-xl font-bold'>Brand Kit</h1>
        <p className='text-wrap max-w-[400px] text-sm font-medium text-muted-foreground'>Select brand kit to get your brand details automatically applied to the carousel.</p>
        <div className="flex flex-col border-2 p-5 rounded-md gap-4 justify-center items-center">
          <p className='text-muted-foreground text-xs'>No Brand Kit Found</p>
          <Button className='rounded-full bg-blue-400 flex gap-2 hover:bg-blue-400/80 active:bg-blue-400/80'>
            <Plus size={16} />
            <span>Create Brand Kit</span>
          </Button>
        </div>
      </div>
      <hr />
      {carouselSettings.elements.map((setting, i) => (
        <CarouselElementRenderer key={i} element={setting} />
      ))}
    </div>
  )
}

export default CarouselDesignTab