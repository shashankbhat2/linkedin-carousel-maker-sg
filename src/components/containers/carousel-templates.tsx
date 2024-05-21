import React, { useEffect, useState } from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { PRESETS } from '@/presets'
import CarouselCard from '../ui/carousel-card'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { IPost, IPreset } from '@/type'
import { isPost } from '@/lib/utils'


type Props = {}

const CarouselTemplatesContainer = (props: Props) => {
    const [totalPosts, setTotalPosts] = useState<number>(0);
    const [posts, setPosts] = useState<IPost[]>([]); // [
    const navigate = useNavigate();

    useEffect(() => {
        const total = localStorage.getItem('totalPosts');
        const posts = JSON.parse(localStorage.getItem('posts') || '[]');
        setPosts(posts);
        setTotalPosts(total ? parseInt(total) : 0);
    }, []);

    const handlePresetClick = (presetOrPost: IPreset | IPost) => {
        if (isPost(presetOrPost)) {
            navigate(`/create/carousels/editor/${presetOrPost.id}`);
        } else {
            const newTotalPosts = totalPosts + 1;
            const newPostId = uuidv4();
            const newPost = {
                id: newPostId,
                title: `Basic #${newTotalPosts}`,
                template: presetOrPost,
            }
            const posts = JSON.parse(localStorage.getItem('posts') || '[]');
            posts.push(newPost);
            localStorage.setItem('posts', JSON.stringify(posts));
            localStorage.setItem('totalPosts', newTotalPosts.toString());
            setTotalPosts(newTotalPosts);
            navigate(`/create/carousels/editor/${newPostId}`);
        }
    };

    return (
        <Tabs defaultValue="templates" className="w-full flex-col gap-2 flex">
            <TabsList className="flex w-full justify-start gap-4 bg-transparent px-0 border-b rounded-none">
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>
            <TabsContent value="templates">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className='text-xl font-medium'>Basic</h1>
                        <p className='text-sm'>For those who want to get started quickly.</p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                        {PRESETS.map((preset, i) => (
                            <button disabled={!preset.editable} key={i} onClick={() => handlePresetClick(preset)}>
                                <CarouselCard template={preset} />
                            </button>
                        ))}
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="saved">
                <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                    {posts.map((post, i) => (
                        <div key={i} onClick={() => handlePresetClick(post)}>
                            <CarouselCard template={post.template} />
                        </div>
                    ))}
                </div>
                {posts.length === 0 && (
                        <div className="flex flex-col items-center justify-center w-full mx-auto my-auto  h-full">
                            <p className="text-gray-400 text-sm">No saved posts yet.</p>
                        </div>
                    )
                }
            </TabsContent>
        </Tabs>
    )
}

export default CarouselTemplatesContainer