import React from "react";
import { Text, Flex, TextField } from "@radix-ui/themes";

export interface ContainerInputProps {
    name: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

const ContainerInput: React.FC<ContainerInputProps> = ({ name, placeholder, value, onChange }) => {
    return (
        <Flex direction="column" width="100%">
            <Text as="label" size="2">
                {name}:
            </Text>
            <TextField.Root
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </Flex>
    );
};

export default ContainerInput;