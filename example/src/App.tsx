import * as React from 'react';

import { DemoPage } from '@redcloudsui/react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <DemoPage />
    </SafeAreaProvider>
  );
}
