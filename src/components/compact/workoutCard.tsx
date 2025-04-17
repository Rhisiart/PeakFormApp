import { FC } from 'react';
import { View } from 'react-native';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Text } from '../ui/text';

import { Exercise } from '~/types/types';

interface IProps {
  exercise: Exercise;
}

const WorkoutCard: FC<IProps> = ({ exercise }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{exercise.name}</CardTitle>
        <CardDescription>{exercise.muscleGroup}</CardDescription>
      </CardHeader>
      <CardContent>
        <View />
      </CardContent>
      <CardFooter>
        <Text>{`${exercise.sets} sets x ${exercise.reps} reps x ${exercise.weight}kg`}</Text>
      </CardFooter>
    </Card>
  );
};

export default WorkoutCard;
