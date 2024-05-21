import { IPreset, IPost } from "@/type";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isPost(presetOrPost: IPreset | IPost): presetOrPost is IPost {
  return (presetOrPost as IPost).id !== undefined;
}


export function hexToRGBA(hex: string, opacity = 0.5) {
  hex = hex.replace(/^#/, '');

  if (hex.length === 3) {
      hex = hex.split('').map(function (hexChar) {
          return hexChar + hexChar;
      }).join('');
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
