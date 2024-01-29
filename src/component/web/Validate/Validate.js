import React from 'react';
import * as yup from 'yup';
 export const ValidateSchema = yup.object({   // schema for check length & min / max
    userName:yup.string().required("user name Required").min(3,"must be at least 3 char").max(30,"must be at least 30 char"),
    email:yup.string().required("user email Required").email,
    password:yup.string().required("user password Required").min(3,"must be at least 3 char").max(30,"must be at least 30 char"),
  });
