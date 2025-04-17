import { QueryFunctionContext, useQuery } from '@tanstack/react-query';

import instance from '../repo/axios';
import { accountKeys } from '../repo/queryContextFactory';

const getWorkoutForDay = async ({
  queryKey: [{ accountId, workoutId, day }],
}: QueryFunctionContext<ReturnType<(typeof accountKeys)['workout']>>) => {
  const response = await instance.get(
    `account/${accountId}/workout/${workoutId}?date=${day.toISOString()}`
  );

  return response.data;
};

export const useWorkoutForDay = (accountId: string, workoutId: string, day: Date) => {
  return useQuery({
    queryKey: accountKeys.workout(accountId, workoutId, day),
    queryFn: getWorkoutForDay,
  });
};
