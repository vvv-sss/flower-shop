import React from 'react';

type Props = {
  title: string;
};

export const CategoryCard: React.FC<Props> = ({title}) => {
  return (
    <div className='w-[300px] h-[300px] border border-rose-500 flex justify-center content-center flex-wrap'>
      <h3 className='text-2xl font-medium md:text-4xl text-brand-black'>{title}</h3>
    </div>
  );
};
