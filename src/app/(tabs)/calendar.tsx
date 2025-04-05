import WorkoutCardList from "@/src/components/compact/workoutCardList";
import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { getCurrentWeekDays } from "@/src/lib/date";
import { useReducer, useState } from "react";
import { View } from "react-native";
import { Directions, Gesture, GestureDetector } from "react-native-gesture-handler";
import { Text } from "../../components/ui/text";

type reduceAction = "increase" | "decrease";

export default function Calender() {
  const [value, setValue] = useState<string>(new Date().getDate().toString());
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());

  const reducer = (state: number, action: reduceAction ) => {
    return action === "increase" ? state + 1 : state - 1;
  }

  const [state, dispatch] = useReducer(reducer, 0);
  const days = getCurrentWeekDays(state);

  const flingGestureRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .numberOfPointers(1)
    .onBegin(e => dispatch("decrease"))
    .onStart((e) => {
      
    })
    .runOnJS(true)

  
  const flingGestureLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .numberOfPointers(1)
    .onBegin(e => dispatch("increase"))
    .onStart((e) => {
      
    })
    .runOnJS(true)

  const onChangeTab = (v: string) => {
    const day = days.find(d => d.getDate().toString() === v);

    if(day) setSelectedDay(day);
    setValue(v);
  }

  return (
    <View className="flex-1 justify-center p-6">
      <Tabs
        value={value}
        onValueChange={onChangeTab}
        className="w-full max-w-[400px] mx-auto flex-col gap-1.5"
      >
        <GestureDetector gesture={flingGestureLeft}>
          <GestureDetector gesture={flingGestureRight}>
            <TabsList className="flex-row w-full">
              {days.map(day => {
                return (
                  <TabsTrigger value={day.toString()}>
                    <Text>{day.toString()}</Text>
                  </TabsTrigger>
              )})} 
            </TabsList>
          </GestureDetector>
        </GestureDetector>
        <WorkoutCardList 
          accountId="123" 
          workoutId="123" 
          day={selectedDay}
        />
      </Tabs>
    </View>
  );
}
