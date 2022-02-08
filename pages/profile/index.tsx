import {NextPage} from "next";
import {Box, Flex, IconButton, Grid, Stat, StatLabel, StatHelpText} from "@chakra-ui/react";
import {LockIcon} from "@chakra-ui/icons";
import {useRouter} from "next/router";
import jwtDecode from "jwt-decode";

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
        <Grid templateRows={'3rem 1fr'} h={'100vh'}>
            <Flex alignItems={'center'} px={'1rem'} h={'full'} justifyContent={'space-between'} borderBottom={'1px'}
                  borderColor={'gray.300'}>
                <Box>
                    <div onClick={() => {router.push('/')}}>Hello, User</div>
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
    )
}

export default Profile
