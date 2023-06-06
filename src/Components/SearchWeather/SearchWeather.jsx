import { useForm, } from "react-hook-form";
import { BtnSend, Form, Input,  } from "./SearchWeather.styled";
import { useState, useEffect, useCallback } from "react";
import debounce from 'lodash.debounce';
import { getCitysLocations } from '../../../API/API-location';

const SearchWeather = ({setLocation}) => {
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const inputValue = watch('location');

  const onSubmit = data => {
    const loc = data.location.trim()
        if(!loc) return alert('write sity');
        setLocation(loc)
  };

  const debounceGetCity = useCallback(debounce((text) => getCitysLocations(text), 500), [])

  useEffect(() => {
  if(!inputValue) return;
  if(inputValue.length < 3) return;
  debounceGetCity(inputValue)
  // getCitysLocations(inputValue)
  // .then(data => console.log(data))

},[inputValue])

  return(
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("location")} type="text" placeholder="Write city"/>
      <BtnSend type="submit">Search</BtnSend>
    </Form>
  )
}

export default SearchWeather;