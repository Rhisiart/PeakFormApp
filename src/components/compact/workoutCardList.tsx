import { useWorkoutForDay } from "@/src/hooks/useWorkoutForDay";
import { FC } from "react";
import { View } from "../primitives/slot";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { TabsContent } from "../ui/tabs";

interface IProps {
  accountId: string,
  workoutId: string,
  day: Date
}

const WorkoutCardList: FC<IProps> = ({accountId, workoutId, day}) => {
  const {data, isLoading, error} = useWorkoutForDay(accountId, workoutId, day);

  return (
    <TabsContent value={day.getDate().toString()}>
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="gap-4 native:gap-2">
          <View className="gap-1">
            
          </View>
        </CardContent>
      </Card>
    </TabsContent>
  )
}

export default WorkoutCardList;