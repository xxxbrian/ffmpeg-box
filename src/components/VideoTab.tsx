import React from "react";
import { Text } from "@radix-ui/themes";
import LineSelect, { type LineSelectProps } from "./basic/LineSelect";

type VideoConfig = {
  type: string;
  options: LineSelectProps["options"];
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
];

const VideoTab: React.FC = () => {
  return (
    <>
      {videoConfig.map((config, index) =>
        config.type === "selects" ? (
          <LineSelect
            key={`${config.type}-${index}`}
            options={config.options}
          />
        ) : (
          <Text key={`unknown-${index}`} size="2">
            Edit your {config.type} settings.
          </Text>
        )
      )}
    </>
  );
};

export default VideoTab;
