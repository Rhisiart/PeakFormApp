import { FC } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { TabsContent } from '../ui/tabs';
import WorkoutCard from './workoutCard';

import { useWorkoutForDay } from '~/hooks/useWorkoutForDay';

interface IProps {
  accountId: string;
  day: Date;
}

const WorkoutTabContent: FC<IProps> = ({ accountId, day }) => {
  const { data, isLoading, error } = useWorkoutForDay(accountId, day);

  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <TabsContent className="gap-4" value={day.getDate().toString()}>
        {data &&
          data.exercises &&
          data.exercises.map((exercise) => {
            return <WorkoutCard key={exercise.id} exercise={exercise} />;
          })}
      </TabsContent>
    </ScrollView>
  );
};

export default WorkoutTabContent;
