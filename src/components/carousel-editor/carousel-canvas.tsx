import { cn, hexToRGBA } from '@/lib/utils';
import { BackgroundElement, Carousel, ColorElement, CommonSettings, LogoElement, Slide } from '@/type';

type Props = {
    slide: Slide;
    commonSettings: CommonSettings;
}

const CarouselCanvas = ({ slide, commonSettings }: Props) => {
    const backgroundImageElement = slide.elements.find(element => element.type === 'image');
    const backgroundImageUrl = backgroundImageElement?.value || "";
    const userName = commonSettings.elements.find(element => element.label === 'Your Name')?.value || "";
    const logo = (commonSettings.elements.find(element => element.type === 'logo') as LogoElement).value.image;
    const backgroundColorElement = commonSettings.elements.find(element => element.type === 'background') as BackgroundElement;
    const backgroundColor = backgroundColorElement?.value.color || "#FFFFFF";
    const primaryColor = (commonSettings.elements.find(element => element.type === 'color' && element.key === "primary_color") as ColorElement).value;
    const primaryFont = (commonSettings.elements.find(element => element.type === 'font' && element.key === "primary_font") as ColorElement).value;
    const secondaryFont = (commonSettings.elements.find(element => element.type === 'font' && element.key === "secondary_font") as ColorElement).value;

    
    const cardStyle = {
        background: backgroundImageUrl ?
            `linear-gradient(to top, ${hexToRGBA(backgroundColor)}, ${hexToRGBA(primaryColor)}), url('${backgroundImageUrl}')` :
            backgroundColor,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className={`relative w-[400px] rounded-md h-[500px] overflow-hidden items-center flex`} style={cardStyle}>
            <div className="flex flex-col p-5 gap-2">
                {slide.slide_type === "intro" ?
                    <div className='absolute mx-1 my-5 flex items-center justify-center  bottom-0 gap-2'>
                        <div className='w-8 h-8 rounded-full overflow-hidden'>
                            <img src={logo} alt="logo" className='h-full w-full object-cover' />
                        </div>
                        <span className='text-white font-sans font-bold'>{userName as string}</span>

                    </div> :
                    <div className='absolute mx-1 my-5 flex items-center justify-center  top-0 gap-2'>
                        <div className='w-8 h-8 rounded-full overflow-hidden'>
                            <img src={logo} alt="logo" className='h-full w-full object-cover' />
                        </div>
                        <span className='text-white font-sans font-bold'>{userName as string}</span>
                    </div>}

                {slide.elements.map((element, index) => {
                    if (element.type === 'text' || element.type === 'multiline') {
                        const fontFamily = element.style.fontFamily.key === "serif" ? 'Instrument Serif' : element.style.fontFamily.key === "primary_font" ? primaryFont : secondaryFont;
                        const lineHeight = element.style.fontSize.value;
                        const fontWeight = element.style.fontWeight?.value || 500;
                        const fontSize = element.style.fontSize.value;
                        const color = "white";

                        return (
                            <div key={index} style={{ lineHeight: lineHeight }}>
                                <p style={{ fontFamily:fontFamily, fontWeight: fontWeight, color: color, fontSize: fontSize }}>
                                    {element.value}
                                </p>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default CarouselCanvas;