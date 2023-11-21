import { useState } from 'react';

export const useTogglePasswordVisibility = (isOn) => {
    const [passwordVisibility, setPasswordVisibility] = useState(isOn);
    const [rightIcon, setRightIcon] = useState('eye');

    const handlePasswordVisibility = () => {
      if (rightIcon === 'eye') {
        setRightIcon('eye-off');
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === 'eye-off') {
        setRightIcon('eye');
        setPasswordVisibility(!passwordVisibility);
      }
    };
  
    return {
      passwordVisibility,
      rightIcon,
      handlePasswordVisibility
    };
  };