import { Button, ButtonProps, Flex, useColorMode } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

export default function ColorModeToggle(props: ButtonProps) {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex justifyContent="center" alignItems="center">
            <Button
                aria-label="Toggle Color Mode"
                onClick={toggleColorMode}
                _focus={{ boxShadow: 'none' }}
                w="fit-content"
                colorScheme="transparent"
                _hover={{bg: colorMode === 'light' ? "lightgray" : "gray"}}
                color={colorMode === 'light' ? "gray" : "white"}
                {...props}>
                {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
            </Button>
        </Flex>
    );
}