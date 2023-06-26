import React from "react";
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>タスク詳細</Box>
    </NativeBaseProvider>
  );
}
