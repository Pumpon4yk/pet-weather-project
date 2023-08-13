import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


export const useError = (val, message = "") => {
  const [locError, setLocError] = useState({val, message});
  
  useEffect(() => {
    if (locError.val) {
      setLocError({val, message});
      toast.error(locError.massege);
    }
  }, [locError]);
  
return [locError, setLocError];
}