import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { cardData } from '@/lib/routes'

const Home = () => {
  return (
    <div className='mx-4 flex flex-col gap-4 overflow-y-auto py-5'>
      <div className="flex flex-col gap-2 mt-4">
        <h1 className='text-xl font-medium'>Generate posts with AI</h1>
        <p className='text-sm'>Select a template to generate high-quality posts with AI</p>
      </div>
      <hr className="h-px w-full bg-gray-200 border dark:bg-gray-700" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {cardData.map((card, index) => (
          <Card key={index} className='cursor-pointer overflow-hidden'>
            <CardHeader className='p-0'>
              <img src={card.imageUrl} alt={card.title} />
            </CardHeader>
            <div className='flex flex-col gap-2 p-4'>
              <CardTitle className='text-lg text-slate-600 tracking-normal'>
                {card.title}
              </CardTitle>
              <p className='text-xs text-gray-500'>
                {card.description}
              </p>
            </div>
          </Card>
        ))
        }
      </div>
    </div>
  )
}
export default Home