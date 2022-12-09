import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { IButtonProps } from './types';
import { Link } from 'react-router-dom';

export const Button: React.FC<IButtonProps> = props => {
  const { withLink, ...rest } = props;

  const button = <MuiButton {...rest} href="" component="button" />;

  if (withLink) {
    return <Link to={withLink}>{button}</Link>;
  }

  return button;
};
