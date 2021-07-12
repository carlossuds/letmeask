/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ type = 'button', ...rest }) => {
  return <button className="button" type={type} {...rest} />;
};
