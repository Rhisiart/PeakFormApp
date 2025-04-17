export const accountKeys = {
  all: [{ scope: 'account' }] as const,
  lists: () => [{ ...accountKeys.all[0], entity: 'list' }] as const,
  list: (accountId: string) => [{ ...accountKeys.lists()[0], accountId }] as const,
  workout: (accountId: string, day: Date) =>
    [{ ...accountKeys.list(accountId)[0], ...workoutKeys.list(day)[0] }] as const,
};

const workoutKeys = {
  all: [{ scope: 'workout' }] as const,
  lists: () => [{ ...workoutKeys.all[0], entity: 'list' }] as const,
  list: (day: Date) => [{ ...workoutKeys.lists()[0], day }] as const,
};
