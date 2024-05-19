
export interface ISlide {
    title: string;
    description?: string;
    image?: string;
    cta?: {
        text: string;
        link: string;
    }
}

export interface ISlideDesign {
    backgroundColor?: string;
}


export interface IPreset {
    id?: never; 
    name: string;
    previewImages: string[];
    slideContent?: ISlide[];
    slideDesign?: ISlideDesign[];
}

export interface IPost {
    id: string;
    template: IPreset;
    slides: ISlide[];
}
