import React, { useState, useEffect } from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  IconButton,
  Icon,
  Input,
  TextArea,
} from "native-base";

import { AntDesign, FontAwesome } from "@expo/vector-icons";

import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://twwzezmtrtkprezyhsac.supabase.co/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3d3plem10cnRrcHJlenloc2FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc5MzkzMjksImV4cCI6MjAwMzUxNTMyOX0.kZjEoXgbh4xgp6O15sHDA2YlugALzPqtfg1Y6wJsB78";
const supabase = createClient(supabaseUrl, supabaseKey);

const Example = () => {
  const [taskname, setTaskName] = useState("");
  const [taskdeadline, setTaskDeadline] = useState("");
  const [taskdetail, setTaskDetail] = useState("");
  const [taskid, setTaskId] = useState("");
  const [isReadOnly, setIsReadOnly] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("tasks").select();
      const taskName = data[0].task_name;
      setTaskName(taskName);
      setTaskDeadline(data[0].task_deadline);
      setTaskDetail(data[0].task_detail);
      setTaskId(data[0].id);
      console.log(data[0].id); // id: 16
    };
    getData();
  }, []);

  useEffect(() => {
    (async () => {
      console.log(isReadOnly);
      if (taskid && isReadOnly == true) {
        const { error } = await supabase.from("tasks").upsert({
          id: taskid,
          task_name: taskname,
          task_deadline: taskdeadline,
          task_detail: taskdetail,
        });

        console.log("error: ", error);
        console.log("data: ", data);
      }
    })();
  }, [isReadOnly]);

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
          <Input
            size="2xl"
            isReadOnly={isReadOnly}
            variant="unstyled"
            borderWidth={isReadOnly ? "0" : "1"}
            value={taskname}
            onChangeText={(text) => setTaskName(text)}
          />

          <Input
            size="xs"
            isReadOnly={isReadOnly}
            variant="unstyled"
            borderWidth={isReadOnly ? "0" : "1"}
            value={taskdeadline}
            onChangeText={(text) => setTaskDeadline(text)}
          />

          <TextArea
            size="md"
            isReadOnly={isReadOnly}
            variant="unstyled"
            borderWidth={isReadOnly ? "0" : "1"}
            value={taskdetail}
            onChangeText={(text) => setTaskDetail(text)}
          />

          <IconButton
            onPress={() => {
              setIsReadOnly(!isReadOnly);
            }}
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
