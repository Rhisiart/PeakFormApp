import { useVideoPlayer, VideoView } from 'expo-video';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Text } from '../ui/text';
import { H4 } from '../ui/typography';

import { Dumbbell } from '~/lib/icons/dumbbell';
import { TimerReset } from '~/lib/icons/timer-reset';
import { Weight } from '~/lib/icons/weight';
import { Exercise } from '~/types/types';

interface IProps {
  exercise: Exercise;
}

const WorkoutCard: FC<IProps> = ({ exercise }) => {
  const player = useVideoPlayer(exercise.videoUrl, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  const avatarImage =
    exercise.muscleGroup === 'Abs'
      ? require('../../lib/images/abs.jpg')
      : exercise.muscleGroup === 'Adductiors'
        ? require('../../lib/images/adductiors.jpg')
        : exercise.muscleGroup === 'Back'
          ? require('../../lib/images/back.jpg')
          : exercise.muscleGroup === 'Calves'
            ? require('../../lib/images/calves.jpg')
            : exercise.muscleGroup === 'Chest'
              ? require('../../lib/images/chest.jpg')
              : exercise.muscleGroup === 'Forearm'
                ? require('../../lib/images/forearm.jpg')
                : exercise.muscleGroup === 'Glutes'
                  ? require('../../lib/images/glutes.jpg')
                  : exercise.muscleGroup === 'Hamstring'
                    ? require('../../lib/images/hamstring.jpg')
                    : exercise.muscleGroup === 'Heck'
                      ? require('../../lib/images/heck.jpg')
                      : exercise.muscleGroup === 'Quadriceps'
                        ? require('../../lib/images/quadriceps.jpg')
                        : require('../../lib/images/shoulder.jpg');

  return (
    <Card className="my-2 h-96 w-full overflow-hidden rounded-3xl">
      <VideoView
        style={StyleSheet.absoluteFill}
        player={player}
        allowsFullscreen={false}
        allowsPictureInPicture={false}
        nativeControls={false}
        contentFit="cover"
      />
      <CardHeader className="h-2/3">
        <CardTitle>
          <Avatar alt={`${exercise.muscleGroup} ${exercise.name}`} className="h-14 w-14">
            <AvatarImage source={avatarImage} />
            <AvatarFallback>
              <Text>{exercise.muscleGroup}</Text>
            </AvatarFallback>
          </Avatar>
        </CardTitle>
      </CardHeader>
      <CardFooter className="m-2 rounded-xl bg-border/30 p-4">
        <View>
          <View className="mb-2">
            <H4>{exercise.name}</H4>
          </View>
          <View className="flex-row flex-wrap items-center gap-x-2 gap-y-2">
            <View className="flex-row space-x-1">
              <Dumbbell className="text-yellow-500" />
              <Text>{`${exercise.sets} sets x ${exercise.reps} reps`}</Text>
            </View>
            <View className="flex-row space-x-1">
              <Weight className="text-yellow-500" />
              <Text>{`${exercise.weight} kg`}</Text>
            </View>
            <View className="flex-row space-x-1">
              <TimerReset className="text-yellow-500" />
              <Text>{`${exercise.rest} sec`}</Text>
            </View>
          </View>
        </View>
      </CardFooter>
    </Card>
  );
};

export default WorkoutCard;
