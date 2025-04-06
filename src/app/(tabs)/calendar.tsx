import { Tabs } from "expo-router";
import { useReducer, useState } from "react";
import { View } from "react-native";
import { Directions, Gesture } from "react-native-gesture-handler";
import { Card, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Text } from "~/components/ui/text";
import { getCurrentWeekDays } from "~/lib/date";

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
  <View className='flex-1 justify-center p-6'>
    <Tabs
      value={value}
      onValueChange={setValue}
      className='w-full max-w-[400px] mx-auto flex-col gap-1.5'
    >
      <TabsList className='flex-row w-full'>
        <TabsTrigger value='account' className='flex-1'>
          <Text>Account</Text>
        </TabsTrigger>
        <TabsTrigger value='password' className='flex-1'>
          <Text>Password</Text>
        </TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value='password'>
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
  </View>
  );
}
