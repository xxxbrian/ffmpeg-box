import React from "react";
import { Flex } from "@radix-ui/themes";
import ContainerSelect, { type ContainerSelectProps } from "./ContainerSelect";

type Option = Omit<ContainerSelectProps, "item" | "onChange">;

export interface LineSelectProps {
  options: Option[];
  item: Record<string, string>;
  onChange: (key: string, value: string) => void;
}

const LineSelect: React.FC<LineSelectProps> = ({ options, item, onChange }) => {
  return (
    <Flex direction="row" justify="between" gap="3">
      {options.map((option) => (
        <ContainerSelect
          {...option}
          item={item}
          onChange={onChange}
          key={option.itemKey}
        />
      ))}
    </Flex>
  );
};

export default LineSelect;
