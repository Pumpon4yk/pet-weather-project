import { useForm } from 'react-hook-form';
import {
  BtnSend,
  Form,
  Input,
  List,
  Item,
  Label,
} from './SearchWeather.styled';
import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import toast from 'react-hot-toast';
import { IoIosClose } from 'react-icons/io';
import { getCitysLocations } from '../../../API/API-location';

const SearchWeather = ({ location, setLocation, setCitySearch }) => {
  const [listCitys, setListCitys] = useState([]);
  const [city, setCity] = useState(null);
  const [isShow, setIsShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm();

  const inputValue = watch('location');

  const onSubmit = data => {
    const loc = data.location.split(',')[0];

    if (!loc) {
      return toast.error('the field is empty');
    }

    if (!city) {
      return toast.error('Wrong city name: ', inputValue);
    }

    const coord = { lat: city.lat, lon: city.lon };

    if (location && location.lat === coord.lat && location.lon === coord.lon)return;

    const cityName = city.city ? city.city: loc;

    setLocation(coord);
    setCitySearch(cityName);
    setListCitys([]);
  };

  const debounceGetCity = useCallback(
    debounce(async text => {
      try {
        const { features } = await getCitysLocations(text);

        if (features.length === 0) {
          throw new Error();
        }

        setListCitys(features);
        setIsShow(true);
      } catch (error) {
        toast.error('Wrong city name: ', inputValue);
      }
    }, 400),
    []
  );

  useEffect(() => {
    if (!inputValue) {
      setCity(null);
      setListCitys([]);
      return;
    }
    if (city && city.formatted === inputValue) return;
    if (inputValue.length < 3) return;

    debounceGetCity(inputValue);
  }, [inputValue]);

  useEffect(() => {
    if (city) {
      handleSubmit(onSubmit)();
    }
  }, [city]);

  const handleSelect = e => {
    const value = e.target.outerText;

    setValue('location', value);
    listCitys.filter(
      ({ properties }) => properties.formatted === value && setCity(properties)
    );
    setIsShow(false);
  };

  const handleClear = () => {
    setValue('location', '');
    setIsShow(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <Input {...register('location')} type="text" placeholder="Write city" />

        <BtnSend type="button" onClick={handleClear}>
          <IoIosClose size={32}/>
        </BtnSend>
      </Label>

      {listCitys.length > 0 && isShow && (
        <List>
          {listCitys.map(({ properties }) => (
            <Item key={properties.place_id} onClick={handleSelect}>
              {properties.formatted}
            </Item>
          ))}
        </List>
      )}
    </Form>
  );
};

export default SearchWeather;
