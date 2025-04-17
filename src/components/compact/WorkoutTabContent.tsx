import { FC } from 'react';

import { TabsContent } from '../ui/tabs';
import WorkoutCard from './workoutCard';

interface IProps {
  accountId: string;
  workoutId: string;
  day: Date;
}

const WorkoutTabContent: FC<IProps> = ({ accountId, workoutId, day }) => {
  //const { data, isLoading, error } = useWorkoutForDay(accountId, workoutId, day);

  return (
    <TabsContent value={day.getDate().toString()}>
      {[0, 1].map((idx) => {
        return <WorkoutCard key={idx} day={day} />;
      })}
    </TabsContent>
  );
};

export default WorkoutTabContent;
