import {FunctionComponent} from "react";
import {Center, Flex} from "@chakra-ui/react";

const MiAuthBox: FunctionComponent = (props) => {
    return (
        <Flex w='full' h='100vh'>
            <Center w='full' h='full'>
                <Flex flexDirection='column' border='1px' borderColor='blueviolet' p='12'>
                    {props.children}
                </Flex>
            </Center>
        </Flex>
    )
}

export default MiAuthBox
