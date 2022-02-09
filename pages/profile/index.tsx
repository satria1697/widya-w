import {NextPage} from "next";
import {Box, Flex, Grid, IconButton, Stat, StatHelpText, StatLabel} from "@chakra-ui/react";
import {LockIcon} from "@chakra-ui/icons";
import {useRouter} from "next/router";
import jwtDecode from "jwt-decode";
import Head from "next/head";

const Profile: NextPage = () => {
    const router = useRouter()

    const handleClose = () => {
        console.log("handled")
    }
    let decoder
    if (typeof window !== "undefined") {
        const jwt = sessionStorage.getItem('jwt')
        decoder = jwtDecode<any>(jwt ?? '')
    }

    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <Grid templateRows={'3rem 1fr'} h={'100vh'}>
                <Flex alignItems={'center'} px={'1rem'} h={'full'} justifyContent={'space-between'} borderBottom={'1px'}
                      borderColor={'gray.300'}>
                    <Box>
                        <Box cursor={'pointer'} onClick={() => {router.push('/')}}>Hello, User</Box>
                    </Box>
                    <Box>
                        <IconButton type={'button'} onClick={handleClose} aria-label={'logout'}
                                    icon={<LockIcon/>}>Logout</IconButton>
                    </Box>
                </Flex>
                <Box px={10} py={4}>
                    <Stat>
                        <StatLabel>Nama</StatLabel>
                        <StatHelpText>{decoder && decoder["name"]}</StatHelpText>
                    </Stat>
                    <Stat>
                        <StatLabel>Email</StatLabel>
                        <StatHelpText>{decoder && decoder["email"]}</StatHelpText>
                    </Stat>
                    <Stat>
                        <StatLabel>Gender</StatLabel>
                        <StatHelpText>{decoder && decoder["gender"] === 'L' ? 'Laki laki' : 'Perempuan'}</StatHelpText>
                    </Stat>
                    <Stat>
                        <StatLabel>Nama</StatLabel>
                        <StatHelpText>{decoder && decoder["name"]}</StatHelpText>
                    </Stat>
                </Box>
            </Grid>
        </>
    )
}

export default Profile
