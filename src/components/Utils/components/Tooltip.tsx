import { FC } from "react";

const Tooltip: FC<{ message: string; children: any }> = ({ message, children }) => {
  return (
    <div className='group relative flex'>
      <span className='absolute bottom-10 scale-0 w-max transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100'>
        {message}
      </span>
      {children}
    </div>
  );
};

export default Tooltip;
