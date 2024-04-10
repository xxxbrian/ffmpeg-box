import React from "react";
import { Flex } from "@radix-ui/themes";
import ContainerInput, { type ContainerInputProps } from "./ContainerInput";

type Option = Omit<ContainerInputProps, "item" | "onChange">;

export interface LineInputProps {
  options: Option[];
  item: Record<string, string>;
  onChange: (key: string, value: string) => void;
}

const LineInput: React.FC<LineInputProps> = ({ options, item, onChange }) => {
  return (
    <Flex direction="row" justify="between" gap="3" maxWidth="700px">
      {options.map((option) => (
        <ContainerInput
          {...option}
          item={item}
          onChange={onChange}
          key={option.itemKey}
        />
      ))}
    </Flex>
  );
};

export default LineInput;
