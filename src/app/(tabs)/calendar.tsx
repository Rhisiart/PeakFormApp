import { useReducer, useState } from 'react';
import { View } from 'react-native';
import { Directions, Gesture } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import WorkoutTabContent from '~/components/compact/WorkoutTabContent';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Text } from '~/components/ui/text';
import { getCurrentWeekDays } from '~/lib/date';

type reduceAction = 'increase' | 'decrease';

export default function Calender() {
  const [value, setValue] = useState<string>(new Date().getDate().toString());

  const reducer = (state: number, action: reduceAction) => {
    return action === 'increase' ? state + 1 : state - 1;
  };

  const [state, dispatch] = useReducer(reducer, 0);
  const days = getCurrentWeekDays(state);

  const flingGestureRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .numberOfPointers(1)
    .onBegin((e) => dispatch('decrease'))
    .onStart((e) => {})
    .runOnJS(true);

  const flingGestureLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .numberOfPointers(1)
    .onBegin((e) => dispatch('increase'))
    .onStart((e) => {})
    .runOnJS(true);

  return (
    <SafeAreaView>
      <View className="flex-1 justify-center p-6">
        <Tabs
          value={value}
          onValueChange={setValue}
          className="mx-auto w-full max-w-[400px] flex-col gap-1.5">
          <TabsList className="w-full flex-row">
            {days.map((day) => {
              return (
                <TabsTrigger
                  key={day.getDate().toString()}
                  value={day.getDate().toString()}
                  className="flex-1">
                  <Text>{day.getDate().toString()}</Text>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {days.map((day) => {
            return (
              <WorkoutTabContent
                key={day.getDate().toString()}
                accountId="123"
                day={day}
                workoutId="123"
              />
            );
          })}
        </Tabs>
      </View>
    </SafeAreaView>
  );
}
