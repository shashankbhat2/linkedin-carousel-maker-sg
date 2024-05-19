import { IPreset, IPost } from "@/type";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isPost(presetOrPost: IPreset | IPost): presetOrPost is IPost {
  return (presetOrPost as IPost).id !== undefined;
}
