import { FC } from 'react';
import { View } from 'react-native';

import WorkoutCard from './workoutCard';

import { Text } from '~/components/ui/text';
import { Clock9 } from '~/lib/icons/clock9';
import { Flame } from '~/lib/icons/flame';
import { Swords } from '~/lib/icons/swords';
import { Workout } from '~/types/types';

interface IProps {
  workout: Workout;
}

const WorkoutDetail: FC<IProps> = ({ workout }) => {
  return (
    <View className="mt-2">
      <View>
        <View>
          <Text className="text-2xl">{workout.name}</Text>
        </View>
        <View className="flex-row">
          <View className="flex-row">
            <Flame className="text-red-600" />
            <Text>{workout.caloriesEstimate}</Text>
          </View>
          <View className="flex-row">
            <Clock9 />
            <Text>{workout.duration}</Text>
          </View>
          <View className="flex-row">
            <Swords />
            <Text>{workout.difficulty}</Text>
          </View>
        </View>
      </View>
      <View>
        {workout.exercises &&
          workout.exercises.map((exercise) => {
            return <WorkoutCard key={exercise.id} exercise={exercise} />;
          })}
      </View>
    </View>
  );
};

export default WorkoutDetail;
