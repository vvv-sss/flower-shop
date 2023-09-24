import React from 'react';
import '@assets/icon-font/iconly.css';
import type {IconName} from '@types';

type Props = {
  name: IconName;
  classes?: string;
};

export const FontIcon: React.FC<Props> = ({name, classes}) => {
  return <i className={`text-2xl/6 iconly icon-${name} ${classes}`} />;
};
