import React from "react";

export const required = value => (value ? undefined : 'Required');

export const renderField =
  ({
     input,
     type,
     placeholder,
     className,
     meta: {touched, error}
   }) => (
    <div>
      <input {...input} placeholder={placeholder} className={className} type={type}/>
      {
        touched && (error && <span> {error} </span>)
      }
    </div>
  )