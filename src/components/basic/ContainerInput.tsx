import React from "react";
import { Text, Flex, TextField } from "@radix-ui/themes";

export interface ContainerInputProps {
  name: string;
  itemKey: string;
  placeholder: string;
  // value: string;
  item: Record<string, string>;
  onChange: (key: string, value: string) => void;
}

const ContainerInput: React.FC<ContainerInputProps> = ({
  name,
  itemKey,
  placeholder,
  item,
  onChange,
}) => {
  return (
    <Flex direction="column" width="100%">
      <Text as="label" size="2">
        {name}:
      </Text>
      <TextField.Root
        value={item[name]}
        placeholder={placeholder}
        onChange={(e) => onChange(itemKey, e.target.value)}
      />
    </Flex>
  );
};

export default ContainerInput;
