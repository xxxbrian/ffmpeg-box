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
  {
    type: "selects",
    options: [
      {
        name: "Pixel Format",
        itemKey: "pixelFormat",
        defaultOption: "auto",
        optionGroups: [
          {
            groupName: null,
            groupOptions: [
              { value: "auto", label: "Auto" },
              { value: "gray", label: "gray" },
              { value: "gray10le", label: "gray10le" },
              { value: "nv12", label: "nv12" },
              { value: "nv16", label: "nv16" },
              { value: "nv20le", label: "nv20le" },
              { value: "nv21", label: "nv21" },
              { value: "yuv420p", label: "yuv420p" },
              { value: "yuv420p10le", label: "yuv420p10le" },
              { value: "yuv422p", label: "yuv422p" },
              { value: "yuv422p10le", label: "yuv422p10le" },
              { value: "yuv444p", label: "yuv444p" },
              { value: "yuv444p10le", label: "yuv444p10le" },
              { value: "yuvj420p", label: "yuvj420p" },
              { value: "yuvj422p", label: "yuvj422p" },
              { value: "yuvj444p", label: "yuvj444p" },
            ],
          },
        ],
      },
      {
        name: "Frame Rate",
        itemKey: "frameRate",
        defaultOption: "auto",
        optionGroups: [
          {
            groupName: null,
            groupOptions: [
              { label: "auto", value: "auto" },
              { label: "ntsc", value: "ntsc" },
              { label: "pal", value: "pal" },
              { label: "film", value: "film" },
              { label: "23.976", value: "24000/1001" },
              { label: "24", value: "24" },
              { label: "25", value: "25" },
              { label: "29.97", value: "30000/1001" },
              { label: "30", value: "30" },
              { label: "48", value: "48" },
              { label: "50", value: "50" },
              { label: "59.94", value: "60000/1001" },
              { label: "60", value: "60" },
            ],
          },
        ],
      },
      {
        name: "Speed",
        itemKey: "speed",
        defaultOption: "auto",
        optionGroups: [
          {
            groupName: null,
            groupOptions: [
              { label: "auto", value: "auto" },
              { label: "10%", value: "10*PTS" },
              { label: "25%", value: "4*PTS" },
              { label: "50%", value: "2*PTS" },
              { label: "75%", value: "1.33333*PTS" },
              { label: "150%", value: ".66667*PTS" },
              { label: "200%", value: ".5*PTS" },
              { label: "250%", value: ".4*PTS" },
              { label: "300%", value: ".33333*PTS" },
              { label: "500%", value: ".2*PTS" },
            ],
          },
        ],
      },
      {
        name: "Tune",
        itemKey: "tune",
        defaultOption: "none",
        optionGroups: [
          {
            groupName: null,
            groupOptions: [
              { label: "None", value: "none" },
              { label: "Film", value: "film" },
              { label: "Animation", value: "animation" },
              { label: "Grain", value: "grain" },
              { label: "Still Image", value: "stillimage" },
              { label: "Fast Decode", value: "fastdecode" },
              { label: "Zero Latency", value: "zerolatency" },
            ],
          },
        ],
      },
      {
        name: "Profile",
        itemKey: "profile",
        defaultOption: "none",
        optionGroups: [
          {
            groupName: null,
            groupOptions: [
              { label: "None", value: "none" },
              { label: "Baseline", value: "baseline" },
              { label: "Main", value: "main" },
              { label: "High", value: "high" },
            ],
          },
        ],
      },
      {
        name: "Level",
        itemKey: "level",
        defaultOption: "none",
        optionGroups: [
          {
            groupName: null,
            groupOptions: [
              { label: "None", value: "none" },
              { label: "1.0", value: "1.0" },
              { label: "1.1", value: "1.1" },
              { label: "1.2", value: "1.2" },
              { label: "1.3", value: "1.3" },
              { label: "2.0", value: "2.0" },
              { label: "2.1", value: "2.1" },
              { label: "2.2", value: "2.2" },
              { label: "3.0", value: "3.0" },
              { label: "3.1", value: "3.1" },
              { label: "3.2", value: "3.2" },
              { label: "4.0", value: "4.0" },
              { label: "4.1", value: "4.1" },
              { label: "4.2", value: "4.2" },
              { label: "5.0", value: "5.0" },
              { label: "5.1", value: "5.1" },
              { label: "5.2", value: "5.2" },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "selects",
    options: [
      {
        name: "Fast Start",
        itemKey: "fastStart",
        defaultOption: "none",
        optionGroups: [
          {
            groupName: null,
            groupOptions: [
              { label: "Enabled (faststart)", value: "enabled" },
              { label: "None", value: "none" },
            ],
          },
        ],
      },
      {
        name: "Size",
        itemKey: "size",
        defaultOption: "source",
        optionGroups: [
          {
            groupName: null,
            groupOptions: [
              { label: "Source", value: "source" },
              { label: "8K", value: "8192" },
              { label: "8K UHD", value: "7680" },
              { label: "4K", value: "4096" },
              { label: "4K UHD", value: "3840" },
              { label: "2K", value: "2048" },
              { label: "1600p", value: "2560" },
              { label: "1440p", value: "2560" },
              { label: "1200p", value: "1920" },
              { label: "1080p", value: "1920" },
              { label: "900p", value: "1600" },
              { label: "720p", value: "1280" },
              { label: "576p", value: "1024" },
              { label: "480p", value: "720" },
              { label: "320p", value: "480" },
              { label: "240p", value: "320" },
              { label: "Custom", value: "custom" },
            ],
          },
        ],
      },
      {
        name: "Format",
        itemKey: "format",
        defaultOption: "widescreen",
        optionGroups: [
          {
            groupName: null,
            groupOptions: [
              { label: "Widescreen", value: "widescreen" },
              { label: "Full Screen", value: "fullscreen" },
            ],
          },
        ],
      },
      {
        name: "Aspect",
        itemKey: "aspect",
        defaultOption: "auto",
        optionGroups: [
          {
            groupName: null,
            groupOptions: [
              { label: "Auto", value: "auto" },
              { label: "1:1", value: "1:1" },
              { label: "2.4:1", value: "2.4:1" },
              { label: "3:2", value: "3:2" },
              { label: "4:3", value: "4:3" },
              { label: "5:4", value: "5:4" },
              { label: "8:7", value: "8:7" },
              { label: "14:10", value: "14:10" },
              { label: "16:9", value: "16:9" },
              { label: "16:10", value: "16:10" },
              { label: "19:10", value: "19:10" },
              { label: "21:9", value: "21:9" },
              { label: "32:9", value: "32:9" },
            ],
          },
        ],
      },
      {
        name: "Scaling",
        itemKey: "scaling",
        defaultOption: "auto",
        optionGroups: [
          {
            groupName: null,
            groupOptions: [
              { label: "Auto", value: "auto" },
              { label: "Neighbor", value: "neighbor" },
              { label: "Area", value: "area" },
              { label: "Fast Bilinear", value: "fast_bilinear" },
              { label: "Bilinear", value: "bilinear" },
              { label: "Bicubic", value: "bicubic" },
              { label: "Experimental", value: "experimental" },
              { label: "Bicublin", value: "bicublin" },
              { label: "Gauss", value: "gauss" },
              { label: "Sinc", value: "sinc" },
              { label: "Lanczos", value: "lanczos" },
              { label: "Spline", value: "spline" },
            ],
          },
        ],
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
        <Box key={`${config.type}-${index}`} mb="4">
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
