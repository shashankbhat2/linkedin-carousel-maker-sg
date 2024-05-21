interface ElementStyle {
  color: { key: string };
  fontSize: { value: string };
  fontFamily: { key: string };
  fontWeight: { value: string };
}

interface TextElement {
  type: "text" | "multiline";
  label: string;
  style: ElementStyle;
  value: string;
  max_words: number;
  target_key: string;
}

interface ImageElement {
  type: "image";
  label: string;
  value: string;
  target_key: string;
}


interface LogoElement {
  key: string;
  type: "logo";
  label: string;
  value: {
    type: "image";
    image: string;
  };
}

export interface BackgroundElement {
  key: "background_color";
  type: "background";
  label: "Background";
  value: {
    type: "color";
    color: string;
    image: string;
    color_options: string[];
    image_options: { image: string }[];
  };
}

export interface ColorElement {
  key: string;
  type: "color";
  label: string;
  value: string;
  style_key_group: string;
}

interface FontElement {
  key: string;
  type: "font";
  label: string;
  value: string;
}

interface CommonTextElement {
  type: "text";
  label: string;
  value: string;
}


type SlideElement = TextElement | ImageElement;


interface Slide {
  elements: SlideElement[];
  slide_type: string;
}

interface CommonSettings {
  elements: CommonElement[];
  swipe_indicator: {
    image: string;
  };
}

type CommonElement =
  | LogoElement
  | BackgroundElement
  | ColorElement
  | FontElement
  | CommonTextElement;
  

interface Carousel {
  slides: Slide[];
  common_settings: CommonSettings;
}

export interface ISlideDesign {
  backgroundColor?: string;
}

export interface IPreset {
  id?: never;
  name: string;
  editable: boolean,
  previewImages: string[];
  carousel?: Carousel;
}

export interface IPost {
  id: string;
  template: IPreset;
}
