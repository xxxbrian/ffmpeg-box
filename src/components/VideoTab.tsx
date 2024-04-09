import React from "react";
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
        optionName: "Codec",
        selectOptions: {
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
          onChange: (value: string) => {
            console.log(value);
          },
        },
      },
      {
        optionName: "Preset",
        selectOptions: {
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
          onChange: (value: string) => {
            console.log(value);
          },
        },
      },
      {
        optionName: "Pass",
        selectOptions: {
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
          onChange: (value: string) => {
            console.log(value);
          },
        },
      },
    ],
  },
  {
    type: "inputs",
    options: [
      {
        name: "Bit Rate",
        placeholder: "Bit Rate",
        value: "",
        onChange: (value: string) => {
          console.log(value);
        },
      },
      {
        name: "Min Rate",
        placeholder: "Min Rate",
        value: "",
        onChange: (value: string) => {
          console.log(value);
        },
      },
      {
        name: "Max Rate",
        placeholder: "Max Rate",
        value: "",
        onChange: (value: string) => {
          console.log(value);
        },
      },
      {
        name: "Buffer Size",
        placeholder: "Buffer Size",
        value: "",
        onChange: (value: string) => {
          console.log(value);
        },
      },
      {
        name: "GOP Size",
        placeholder: "GOP Size",
        value: "",
        onChange: (value: string) => {
          console.log(value);
        },
      },
    ],
  },
];

const VideoTab: React.FC = () => {
  return (
    <>
      {videoConfig.map((config, index) => {
        if (config.type === "selects") {
          return (
            <LineSelect
              key={`${config.type}-${index}`}
              options={config.options as LineSelectProps["options"]}
            />
          );
        }
        else if (config.type === "inputs") {
          return (
            <LineInput
              key={`${config.type}-${index}`}
              options={config.options as LineInputProps["options"]}
            />
          );
        }
        return null;
      })}
    </>
  );
};

export default VideoTab;
