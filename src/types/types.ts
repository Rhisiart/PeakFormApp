type MuscleGroup =
  | 'Abs'
  | 'Adductiors'
  | 'Back'
  | 'Calves'
  | 'Chest'
  | 'Forearm'
  | 'Glutes'
  | 'Hamstring'
  | 'Heck'
  | 'Quadriceps'
  | 'Shoulder';

export type Exercise = {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  reps: number;
  sets: number;
  weight: number;
  duration: number;
  rest: number;
  notes: string;
  videoUrl: string;
};

export type Workout = {
  id: string;
  name: string;
  description: string;
  workoutType: string;
  difficulty: string;
  caloriesEstimate: number;
  exercises: Exercise[];
};
