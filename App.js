import React from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  IconButton,
  Icon,
} from "native-base";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const Example = () => {
  return (
    <NativeBaseProvider>
      <Box
        backgroundColor="tertiary.100"
        flex="1"
        alignItems="center"
        pt="20"
        pb="32"
        px="8"
      >
        <IconButton
          icon={
            <Icon as={<AntDesign />} name="arrowleft" color="black" size="xl" />
          }
          position={"absolute"}
          top="8"
          left="4"
        ></IconButton>

        <Heading fontSize="32">タスク詳細</Heading>
        <Box bgColor="white" w="100%" h="80%" py="4" px="4" m="4" rounded="10%">
          <Heading>買い物に行く</Heading>
          <Text color="muted.500">05/01 18:00まで</Text>
          <Text></Text>
          <Heading fontSize="18" pt="2">
            ・牛乳
          </Heading>
          <Heading fontSize="18">・にんじん</Heading>
          <IconButton
            icon={
              <Icon
                as={<FontAwesome name="pencil-square-o" />}
                name="add task"
                color="black"
                size="8"
              />
            }
            position="absolute"
            top="2"
            right="2"
          ></IconButton>
        </Box>
        <IconButton
          bg="tertiary.400"
          rounded="100%"
          size="16"
          icon={
            <Icon
              as={<AntDesign name="delete"></AntDesign>}
              name="dustbox"
              color="white"
              size="8"
            />
          }
          position="absolute"
          bottom="8"
          right="8"
        ></IconButton>
      </Box>
    </NativeBaseProvider>
  );
};

export default function App() {
  return <Example />;
}
