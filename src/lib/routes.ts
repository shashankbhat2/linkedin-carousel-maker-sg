import {
  Sparkles,
  Lightbulb,
  GalleryHorizontal,
  StickyNote,
  TrendingUp,
  Newspaper,
  Calendar,
  MousePointerClick,
  Bookmark,
  Settings,
  MessageSquareText,
} from "lucide-react";

export const ROUTES = [
  { path: "/", label: "Post Generator", icon: Sparkles },
  { path: "/ideas", label: "Ideas Generator", icon: Lightbulb },
  {
    path: "/create/carousels",
    label: "Carousel Maker",
    icon: GalleryHorizontal,
  },
  { path: "/posts", label: "Posts", icon: StickyNote },
  { path: "/content", label: "Content Inspiration", icon: TrendingUp },
  { path: "/posts-for-you", label: "Posts for You", icon: Newspaper },
  { path: "/calendar", label: "Calendar", icon: Calendar },
  { path: "/engage", label: "Engage", icon: MousePointerClick },
  { path: "/swipe-files", label: "Swipe Files", icon: Bookmark },
  { path: "/settings", label: "Workspace Settings", icon: Settings },
  { path: "/feedback", label: "Feature Request", icon: MessageSquareText },
];

export const MOBILE_ROUTES = [
  { path: "/", label: "AI", icon: Sparkles },
  { path: "/ideas", label: "Ideas", icon: Lightbulb },
  { path: "/create/carousels", label: "Carousels", icon: GalleryHorizontal },
  { path: "/posts", label: "Posts", icon: StickyNote },
  { path: "/inspiration", label: "Inspiration", icon: TrendingUp },
  { path: "/calendar", label: "Calendar", icon: Calendar },
];


export const cardData: { title: string; description: string; imageUrl: string }[] = [
  { 
      title: "Generate Post from Scratch", 
      description: "Use the power of AI-generated content to create impactful...",
      imageUrl: "https://ckfwvufqcepsjlnnrzqi.supabase.co/storage/v1/object/public/company/write-from-scratch.png"
  },
  { 
      title: "Generate a post from a Youtube video", 
      description: "Share a Youtube video link and generate a post from it",
      imageUrl: "https://ckfwvufqcepsjlnnrzqi.supabase.co/storage/v1/object/public/company/yotube-to-linkedin-post.png"
  },
  { 
      title: "Generate a post from an article", 
      description: "Share a link to a blog post and generate a post from it",
      imageUrl: "https://ckfwvufqcepsjlnnrzqi.supabase.co/storage/v1/object/public/company/article-to-linkedin-post.png"
  },
  { 
      title: "Share your learnings from a book", 
      description: "Share the learnings from a book and let AI create a post for you.",
      imageUrl: "https://ckfwvufqcepsjlnnrzqi.supabase.co/storage/v1/object/public/company/share-learnings-from-a-book.png"
  },
  { 
      title: "Share tips on your topic of interest", 
      description: "Share the tips on your topic of interest and let AI create a post for you.",
      imageUrl: "https://ckfwvufqcepsjlnnrzqi.supabase.co/storage/v1/object/public/company/share-tips-with-your-audience.png"
  }
];
