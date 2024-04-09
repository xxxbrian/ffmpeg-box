import React from "react";
import { Select } from "@radix-ui/themes";

type Groups = {
  groupName: string | null;
  groupOptions: { value: string; label: string; disable?: boolean }[];
};

export interface ContainerSelectProps {
  defaultOption: string;
  optionGroups: Groups[];
  onChange: (value: string) => void;
}

const exampleOptions = [
  {
    groupName: "Video",
    options: [
      { value: "mp4", label: "MP4" },
      { value: "webm", label: "WebM" },
      { value: "mkv", label: "MKV" },
      { value: "avi", label: "AVI" },
      { value: "mov", label: "MOV" },
      { value: "flv", label: "FLV" },
      { value: "ogv", label: "OGV" },
      { value: "mpg", label: "MPG" },
    ],
  },
  {
    groupName: "Audio",
    options: [
      { value: "mp3", label: "MP3" },
      { value: "wav", label: "WAV" },
      { value: "ogg", label: "Ogg" },
    ],
  },
];

const ContainerSelect: React.FC<ContainerSelectProps> = ({
  defaultOption,
  optionGroups,
  onChange,
}) => {
  return (
    <Select.Root defaultValue={defaultOption} onValueChange={onChange}>
      <Select.Trigger />
      <Select.Content>
        {optionGroups.map((group, index) => (
          // use React.Fragment since elements need to be wrapped in a single parent
          <React.Fragment key={group.groupName}>
            {index !== 0 && <Select.Separator />}
            <Select.Group>
              {group.groupName && (
                <Select.Label>{group.groupName}</Select.Label>
              )}
              {group.groupOptions.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  disabled={option.disable}
                >
                  {option.label}
                </Select.Item>
              ))}
            </Select.Group>
          </React.Fragment>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default ContainerSelect;
