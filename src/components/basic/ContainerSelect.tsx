import React from "react";
import { Flex, Text, Select } from "@radix-ui/themes";

type Groups = {
  groupName: string | null;
  groupOptions: { value: string; label: string; disable?: boolean }[];
};

export interface ContainerSelectProps {
  name: string;
  itemKey: string;
  defaultOption: string;
  optionGroups: Groups[];
  value: string;
  onChange: (key: string, value: string) => void;
}

const ContainerSelect: React.FC<ContainerSelectProps> = ({
  name,
  itemKey,
  defaultOption,
  optionGroups,
  value,
  onChange,
}) => {
  return (
    <Flex direction="column" width="100%">
      <Text as="label" size="2">
        {name}:
      </Text>
      <Select.Root
        defaultValue={defaultOption}
        value={value}
        onValueChange={(value) => onChange(itemKey, value)}
      >
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
                    key={option.label}
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
    </Flex>
  );
};

export default ContainerSelect;
