import useOutsideClick from '@/hooks/useOutsideClick';
import { cn } from '@/lib/utils';
import { Pen } from 'lucide-react';
import React, { useRef } from 'react'

type Props = {
    isEditable: boolean;
    value: string;
    className?: string;
    editToggle: () => void;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    saveHandler: (value: any) => void;
  };
  
  const EditableInput = ({
    isEditable,
    editToggle,
    value,
    onChangeHandler,
    saveHandler,
    className,
  }: Props) => {
    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef, () => isEditable && editToggle());
  
    return (
      <div
        className={cn(
          "flex items-center gap-2 rounded-md ",
          className,
        )}
      >
        {isEditable ? (
          <>
            <label htmlFor="title" className="sr-only">
              Edit Title
            </label>
            <input
                ref={wrapperRef}
              type="text"
              className="h-full  w-[350px]  font-semibold overflow-hidden text-xl text-ellipsis text-black whitespace-nowrap rounded-md bg-slate-100 px-2 outline-none focus:ring-0"
              onChange={onChangeHandler}
              defaultValue={value}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  editToggle();
                  saveHandler(value)
                }
              }}
            />
          </>
        ) : (
          <span
            onClick={editToggle}
            className="truncate w-[350px]  h-full font-semibold flex justify-between items-center text-xl text-slate-600 cursor-pointer  overflow-hidden text-ellipsis whitespace-nowrap rounded-md font-DM_Sans"
          >
            {value}...
          </span>
        )}
      </div>
    );
  };
  

export default EditableInput