import CarouselEditor from '@/components/carousel-editor';
import { Button } from '@/components/ui/button';
import EditableInput from '@/components/ui/editable-input';
import { IPost } from '@/type';
import { ArrowLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

const CarouselEditorPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<IPost | null>(null);
  const [editTitle, setEditTitle] = useState({
    title: "",
    isEditable: false,
  });

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    const foundPost = posts.find((p: any) => p.id === id);

    if (foundPost) {
      setPost(foundPost);
      setEditTitle({
        title: foundPost.title,
        isEditable: false,
      })
    } else {
      console.log('No post found with the given ID.');
      setPost(null)
    }
  }, [id]);

  if (!post) {
    return <div className='flex justify-center h-full items-center mx-auto my-auto'>
      <h1 className='text-3xl font-bold'>404 Not Found</h1>
    </div>
  }

  const handleEditTitleToggle = () => {
    setEditTitle((prevState) => {
      if (prevState.isEditable && !prevState.title.trim()) {
        return prevState;
      }
      return {
        ...prevState,
        isEditable: !prevState.isEditable,
      };
    });
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };



  return (
    <div className='flex flex-col overflow-y-auto'>
      <div className="flex flex-col lg:flex-row gap-6 py-6 px-4 border-b justify-between">
        <Button asChild variant="ghost" className='rounded-full  bg-white text-muted-foreground gap-1'>
          <NavLink to="/create/carousels">
            <ArrowLeft size="16px" />
            Back
          </NavLink>
        </Button>
        <EditableInput saveHandler={() => console.log("hello")} onChangeHandler={handleTitleChange} editToggle={handleEditTitleToggle} isEditable={editTitle.isEditable} value={editTitle.title} />
        <div className="flex gap-2">
          <Button variant="ghost"  className='rounded-full bg-white text-black border w-full'>
            Save
          </Button>
          <Button className='rounded-full bg-blue-500 text-white border w-full'>
            Preview
          </Button>
        </div>
      </div>
      <CarouselEditor post={post} />
    </div>
  )
}

export default CarouselEditorPage