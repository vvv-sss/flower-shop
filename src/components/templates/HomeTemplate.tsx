import React from 'react';
import {Header, HomeHero} from '@organisms';
import {CategoryCard} from '@molecules';
import { FontIcon } from '../atoms/FontIcon';
import { useTranslation } from 'react-i18next';

type Props = {};

export const HomeTemplate: React.FC<Props> = ({}) => {
  const {t} = useTranslation();
  
  return (
    <>
      <Header />
      <main className="px-[16px] pt-[40px]">
        <HomeHero />
        <CategoryCard title="Fresh flowers" />
        <h1 className='mb-[20px]'>{t('test')}</h1>
      </main>
    </>
  );
};
