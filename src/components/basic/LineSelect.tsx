import React from "react";
import { Text, Flex } from "@radix-ui/themes";
import ContainerSelect, { type ContainerSelectProps } from "./ContainerSelect";

type Option = {
  optionName: string;
  selectOptions: ContainerSelectProps;
};

export interface LineSelectProps {
  options: Option[];
}

const LineSelect: React.FC<LineSelectProps> = ({ options }) => {
  return (
    <Flex direction="row" justify="between" gap="3">
      {options.map((option) => (
        <Flex direction="column" width="100%">
          <Text as="label" size="2">
            {option.optionName}
          </Text>
          <ContainerSelect {...option.selectOptions} />
        </Flex>
      ))}
    </Flex>
  );
};

export default LineSelect;
