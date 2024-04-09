import React from "react";
import { Box } from "@radix-ui/themes";
import LineSelect, { type LineSelectProps } from "./basic/LineSelect";
import LineInput, { LineInputProps } from "./basic/LineInput";

type VideoConfig = {
  type: string;
  options: LineSelectProps["options"] | LineInputProps["options"];
};

const videoConfig: VideoConfig[] = [
  {
    type: "selects",
    options: [
      {
        name: "Codec",
        itemKey: "codec",
        defaultOption: "h264",
        optionGroups: [
          {
            groupName: null,
            groupOptions: [
              { value: "h264", label: "H.264" },
              { value: "h265", label: "H.265" },
              { value: "vp8", label: "VP8" },
              { value: "vp9", label: "VP9" },
              { value: "av1", label: "AV1" },
              { value: "copy", label: "Copy" },
            ],
          },
        ],
      },
      {
        name: "Preset",
        itemKey: "preset",
        defaultOption: "none",
        optionGroups: [
          {
            groupName: null,
            groupOptions: [
              { value: "none", label: "None" },
              { value: "ultrafast", label: "Ultrafast" },
              { value: "superfast", label: "Superfast" },
              { value: "veryfast", label: "Veryfast" },
              { value: "faster", label: "Faster" },
              { value: "fast", label: "Fast" },
              { value: "medium", label: "Medium" },
              { value: "slow", label: "Slow" },
              { value: "slower", label: "Slower" },
              { value: "veryslow", label: "Veryslow" },
              { value: "placebo", label: "Placebo" },
            ],
          },
        ],
      },
      {
        name: "Pass",
        itemKey: "pass",
        defaultOption: "1 Pass",
        optionGroups: [
          {
            groupName: null,
            groupOptions: [
              { value: "crf", label: "CRF", disable: true },
              { value: "1 Pass", label: "1 Pass" },
              { value: "2 Pass", label: "2 Pass", disable: true },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "inputs",
    options: [
      {
        name: "Bit Rate",
        itemKey: "bitRate",
        placeholder: "Bit Rate",
      },
      {
        name: "Min Rate",
        itemKey: "minRate",
        placeholder: "Min Rate",
      },
      {
        name: "Max Rate",
        itemKey: "maxRate",
        placeholder: "Max Rate",
      },
      {
        name: "Buffer Size",
        itemKey: "bufferSize",
        placeholder: "Buffer Size",
      },
      {
        name: "GOP Size",
        itemKey: "gopSize",
        placeholder: "GOP Size",
      },
    ],
  },
];

interface VideoTabProps {
  items: Record<string, string>;
  onChange: (key: string, value: string) => void;
}

const VideoTab: React.FC<VideoTabProps> = ({ items, onChange }) => {
  return (
    <>
      {videoConfig.map((config, index) => (
        <Box key={index} mb="4">
          {config.type === "selects" && (
            <LineSelect
              options={config.options as LineSelectProps["options"]}
              item={items}
              onChange={onChange}
            />
          )}
          {config.type === "inputs" && (
            <LineInput
              options={config.options as LineInputProps["options"]}
              item={items}
              onChange={onChange}
            />
          )}
        </Box>
      ))}
    </>
  );
};

export default VideoTab;
