import { useForm } from "react-hook-form";
import { BtnSend, Form, Input,  } from "./SearchWeather.styled";


const SearchWeather = ({setLocation}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const loc = data.location.trim()
        if(!loc) return alert('write sity');
        setLocation(loc)

  };


  return(
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input  {...register("location")} type="text" placeholder="Write city"/>
      <BtnSend type="submit">Search</BtnSend>
    </Form>
  )
}

export default SearchWeather;