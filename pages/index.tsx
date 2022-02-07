import type {NextPage} from 'next'
import {Box, Button, Center, Flex, FormControl, FormLabel, Grid} from "@chakra-ui/react";
import {ChangeEventHandler, FormEventHandler, useState} from "react";
import MiInput from "../component/Input";

const Home: NextPage = () => {
    return (
        <Box>
            <span>Hello, User</span>
        </Box>
    )
}

export default Home
