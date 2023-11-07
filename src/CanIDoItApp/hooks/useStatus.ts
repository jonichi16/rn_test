import {useEffect, useState} from 'react';
import {getStatus} from '../helpers/status';

const useStatus = (task: string, weatherCondition: string) => {
  const [status, setStatus] = useState<string>('');

  useEffect(() => {
    setStatus(getStatus(task, weatherCondition));
  }, [task, weatherCondition]);

  return status;
};

export default useStatus;
