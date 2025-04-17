import { FC } from 'react';
import { View } from 'react-native';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Text } from '../ui/text';

interface IProps {
  day: Date;
}

const WorkoutCard: FC<IProps> = ({ day }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{day.getDate().toString()}</CardTitle>
        <CardDescription>{day.getDate().toString()}</CardDescription>
      </CardHeader>
      <CardContent>
        <View />
      </CardContent>
      <CardFooter>
        <Text>3 sets x 6-8 reps x 67.5 kg</Text>
      </CardFooter>
    </Card>
  );
};

export default WorkoutCard;
