import { PenLine } from 'lucide-react'

const CreateButton = () => {
    return (
        <div className='fixed w-auto inset-x-0 z-10 bottom-0 m-9 md:m-4 flex  justify-center md:justify-end'>
            <button className='bg-blue-500 w-[50px] h-[50px]  md:w-auto  md:h-auto border-[4px] md:border-none   flex  gap-2 hover:bg-blue-700 items-center justify-center text-white font-bold p-2 md:px-3  rounded-full'>
                <PenLine />
                <span className='hidden md:block text-lg font-medium'>Write New Post</span>
            </button>
        </div>
    )
}

export default CreateButton