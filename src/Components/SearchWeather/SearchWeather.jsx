import { useForm, } from "react-hook-form";
import { BtnSend, Form, Input, List, Item } from "./SearchWeather.styled";
import { useState, useEffect, useCallback } from "react";
import debounce from 'lodash.debounce';
import { getCitysLocations } from '../../../API/API-location';

const SearchWeather = ({setLocation, setCitySearch}) => {
  const [listCitys, setListCitys] = useState(null)
  const [city, setCity] = useState(null)
  const [isShow, setIsShow] = useState(false)

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();

  const inputValue = watch('location');

  const onSubmit = data => {
    const loc = data.location.split(',')[0]
        if(!loc) return alert('write sity');
        const coord = {lat: city.lat, lon: city.lon}
        setLocation(coord)
        setCitySearch(loc)

        setCity(null)
        setListCitys(null)
  };

  const debounceGetCity = useCallback(debounce( async (text) => {
    const resp = await getCitysLocations(text)
    setListCitys(resp.features)
    setIsShow(true)
  }, 400), [])

  useEffect(() => {
  if(city) return;
  if(!inputValue) return;
  if(inputValue.length < 3) return;
  debounceGetCity(inputValue)

},[inputValue])

const handleSelect = (e) => {
  const value = e.target.outerText;

  setValue('location', value);
  listCitys.filter(({properties}) => properties.formatted === value && setCity(properties));
  setIsShow(false);
}

  return(
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("location")} type="text" placeholder="Write city"/>
      <BtnSend type="submit">Search</BtnSend>

    {listCitys && isShow && <List>
    {listCitys.map(({properties}) => <Item key={properties.place_id} onClick={handleSelect}>{properties.formatted}</Item>)}
      </List>}
      
    </Form>
  )
}

export default SearchWeather;