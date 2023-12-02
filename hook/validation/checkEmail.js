import { useState } from 'react';

export const checkEmailValidity = (email) => {
    let validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );
    if (!validEmail.test(email)){
        return false;
    }
    return true;
  };