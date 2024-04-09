import { useEffect, useReducer } from "react";
import { Tabs, Box, Text, Select, Flex } from "@radix-ui/themes";
import "./App.css";
import VideoTab from "./components/VideoTab";

type Config = {
  input: {
    path: string;
    name: string;
    ext: string;
  };
  format: {
    container: string;
    clip: string;
  };
  video: {
    codec: string;
    preset: string;
    pass: string;
    bitRate: string;
    minRate: string;
    maxRate: string;
    bufferSize: string;
    gopSize: string;
  };
  audio: Record<string, any>;
  filters: Record<string, any>;
  options: Record<string, any>;
};

const initailConfig: Config = {
  input: {
    path: "",
    name: "",
    ext: "",
  },
  format: {
    container: "mp4",
    clip: "none",
  },
  video: {
    codec: "h264",
    preset: "none",
    pass: "1 Pass",
    bitRate: "",
    minRate: "",
    maxRate: "",
    bufferSize: "",
    gopSize: "",
  },
  audio: {},
  filters: {},
  options: {},
};

const reducer = (
  state: Config,
  action: { type: string; payload: Record<string, any> },
) => {
  switch (action.type) {
    case "updateFormat":
      return {
        ...state,
        format: {
          ...state.format,
          ...action.payload,
        },
      };
    case "updateVideo":
      return {
        ...state,
        video: {
          ...state.video,
          ...action.payload,
        },
      };
    case "updateAudio":
      return {
        ...state,
        audio: {
          ...state.audio,
          ...action.payload,
        },
      };
    case "updateFilters":
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    case "updateOptions":
      return {
        ...state,
        options: {
          ...state.options,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initailConfig);

  const videoOnChange = (key: string, value: string) => {
    dispatch({
      type: "updateVideo",
      payload: {
        [key]: value,
      },
    });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div
      data-tauri-drag-region
      className="h-full flex flex-col items-center pt-10 parent-select-none"
    >
      <div>
        <button
          type="button"
          className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <Text size="3">Add Files</Text>
        </button>
      </div>
      <div className="flex flex-col mt-10 min-w-[700px]">
        <Tabs.Root defaultValue="format">
          <Tabs.List>
            <Tabs.Trigger value="format">
              <Text size="3">Format</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value="video">
              <Text size="3">Video</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value="audio">
              <Text size="3">Audio</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value="filters">
              <Text size="3">Filters</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value="options">
              <Text size="3">Options</Text>
            </Tabs.Trigger>
          </Tabs.List>

          <Box pt="3">
            <Tabs.Content value="format">
              <Flex direction="row" justify="between" gap="3">
                <Flex direction="column" width="100%">
                  <Text as="label" size="2">
                    Container:
                  </Text>
                  <Select.Root defaultValue="mp4">
                    <Select.Trigger />
                    <Select.Content>
                      <Select.Group>
                        <Select.Label>Video</Select.Label>
                        <Select.Item value="mp4">MP4</Select.Item>
                        <Select.Item value="mkv">MKV</Select.Item>
                        <Select.Item value="mov">MOV</Select.Item>
                        <Select.Item value="webm">WebM</Select.Item>
                        <Select.Item value="mpg">MPG</Select.Item>
                        <Select.Item value="avi">AVI</Select.Item>
                        <Select.Item value="ogv">OGV</Select.Item>
                        <Select.Item value="flv">FLV</Select.Item>
                      </Select.Group>
                      <Select.Separator />
                      <Select.Group>
                        <Select.Label>Audio</Select.Label>
                        <Select.Item value="mp3">MP3</Select.Item>
                        <Select.Item value="m4a">M4A</Select.Item>
                        <Select.Item value="wav">WAV</Select.Item>
                        <Select.Item value="ogg">OGG</Select.Item>
                        <Select.Item value="flac">FLAC</Select.Item>
                      </Select.Group>
                    </Select.Content>
                  </Select.Root>
                </Flex>
                <Flex direction="column" width="100%">
                  <Text as="label" size="2">
                    Clip:
                  </Text>
                  <Select.Root defaultValue="none">
                    <Select.Trigger />
                    <Select.Content>
                      <Select.Group>
                        <Select.Item value="none">None</Select.Item>
                        <Select.Item value="enabled">Enabled</Select.Item>
                      </Select.Group>
                    </Select.Content>
                  </Select.Root>
                </Flex>
              </Flex>
            </Tabs.Content>

            <Tabs.Content value="video">
              <VideoTab items={state.video} onChange={videoOnChange} />
            </Tabs.Content>

            <Tabs.Content value="audio">
              <Text size="2">Edit your audio settings.</Text>
            </Tabs.Content>

            <Tabs.Content value="filters">
              <Text size="2">Edit your filters settings.</Text>
            </Tabs.Content>

            <Tabs.Content value="options">
              <Text size="2">Edit your options settings.</Text>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </div>
    </div>
  );
}

export default App;
