import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import axios from 'axios';

import instance from '../repo/axios';
import { accountKeys } from '../repo/queryContextFactory';

import { formatDate } from '~/lib/date';
import { Workout } from '~/types/types';

const getWorkoutForDay = async ({
  queryKey: [{ accountId, day }],
}: QueryFunctionContext<ReturnType<(typeof accountKeys)['workout']>>) => {
  try {
    const response = await instance.get(`account/${accountId}/workout?date=${formatDate(day)}`);
    return response.data as Workout;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
      console.error('Error config:', error.config);
      console.error('Error response:', error.response);
    } else {
      console.error('Unexpected error:', error);
    }
    throw new Error('Failed to fetch workout data');
  }
};

export const useWorkoutForDay = (accountId: string, day: Date) => {
  return useQuery({
    queryKey: accountKeys.workout(accountId, day),
    queryFn: getWorkoutForDay,
  });
};
