import { useEffect, useReducer, useState } from 'react';
import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import WorkoutTabContent from '~/components/compact/WorkoutTabContent';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Text } from '~/components/ui/text';
import { getCurrentWeekDays, isToday } from '~/lib/date';

type ReduceAction = 'increase' | 'decrease';

export default function Calender() {
  const [value, setValue] = useState<string>(new Date().getDate().toString());
  const [weekOffset, dispatch] = useReducer((state: number, action: ReduceAction) => {
    return action === 'increase' ? state + 1 : state - 1;
  }, 0);
  const [days, setDays] = useState<Date[]>([]);

  const pan = Gesture.Pan()
    .onEnd((e) => {
      //const swipeDirection = e.translationX < -50 ? 'right' : 'left';
      const offset = e.translationX;
      if (offset < -50) {
        dispatch('increase');
      } else if (offset > 50) {
        dispatch('decrease');
      }
    })
    .runOnJS(true);

  useEffect(() => {
    console.log(`offset = ${weekOffset}`);
    const currentDays = getCurrentWeekDays(weekOffset);
    const includeTodayDate = currentDays.some((x) => isToday(x));
    const selectedDay = includeTodayDate
      ? new Date().getDate().toString()
      : currentDays[0].getDate().toString();

    console.log(`selected day = ${selectedDay}`);

    setDays(currentDays);
    setValue(selectedDay);
  }, [weekOffset]);

  return (
    <SafeAreaView>
      <View className="flex-1 justify-center p-6">
        <Tabs
          value={value}
          onValueChange={setValue}
          className="mx-auto w-full max-w-[400px] flex-col gap-1.5">
          <GestureDetector gesture={pan}>
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
          </GestureDetector>
          {days.map((day) => {
            return (
              <WorkoutTabContent
                key={day.getDate().toString()}
                accountId="8bbc1d23-80d9-4fed-8079-f35e7504950e"
                day={day}
              />
            );
          })}
        </Tabs>
      </View>
    </SafeAreaView>
  );
}
