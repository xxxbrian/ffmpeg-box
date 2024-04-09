import React from "react";
import { Flex } from "@radix-ui/themes";
import ContainerInput, { type ContainerInputProps } from "./ContainerInput";

type Option = ContainerInputProps;

export interface LineInputProps {
    options: Option[];
}

const LineInput: React.FC<LineInputProps> = ({ options }) => {
    return (
        <Flex direction="row" justify="between" gap="3" maxWidth="700px">
            {options.map((option) => (
                <ContainerInput {...option} />
            ))}
        </Flex>
    );
}

export default LineInput;