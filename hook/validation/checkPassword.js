import { useState } from 'react';

export const checkPasswordValidity = (password) => {
    /*
        Minimum password requirements:
        - At least eight characters
        - A combination of letters, numbers, and symbols
        - No accents or accented characters
        - No passwords that start or end with a blank space
    */
    let validPassword = new RegExp(
        '^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#(?)!@$%^&*-])(?!.*?[À-ž]).{8,}$'
    );
    let firstLetter = password.charAt(0);
    let lastLetter = password.charAt(password.length - 1);
    if (!validPassword.test(password) || firstLetter == ' ' || lastLetter == ' '){
        return false;
    }
    return true;
  };