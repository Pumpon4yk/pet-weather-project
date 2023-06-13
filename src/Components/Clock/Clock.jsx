import { useState, useEffect } from "react";
import { Time } from "./Clock.styled";
import {startTime} from '../../utils/startTime';
import { formatDateTime } from '../../utils/formatDate';


const Clock = ({timezone, styles}) => {

  const [currentTime, setCurrentTime] = useState(
    formatDateTime(timezone)
  );

  useEffect(() => {
    let timer = startTime(setCurrentTime, timezone);

    return () => {
      clearInterval(timer);
    };
  }, [timezone]);

  return(
    <Time style={styles} >{currentTime}</Time>
  )
}

export default Clock