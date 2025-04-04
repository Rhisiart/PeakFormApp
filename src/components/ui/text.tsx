import * as Slot from '@/src/components/primitives/slot';
import { cn } from '@/src/lib/utils';
import * as React from 'react';
import { Text as RNText } from 'react-native';
import type { SlottableTextProps, TextRef } from '../primitives/types';

const TextClassContext = React.createContext<string | undefined>(undefined);

const Text = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const textClass = React.useContext(TextClassContext);
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn('text-base text-foreground web:select-text', textClass, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

export { Text, TextClassContext };

