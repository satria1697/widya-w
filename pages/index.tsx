import type {NextPage} from 'next'
import {Box, Button, Flex, Grid, IconButton, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {PlusSquareIcon, LockIcon} from "@chakra-ui/icons";

const Home: NextPage = () => {
    return (
        <Grid templateRows={'3rem 1fr'} h={'100vh'}>
            <Flex alignItems={'center'} px={'1rem'} h={'full'} justifyContent={'space-between'} borderBottom={'1px'}
                  borderColor={'gray.300'}>
                <Box>
                    <span>Hello, User</span>
                </Box>
                <Box>
                    <IconButton aria-label={'logout'} icon={<LockIcon/>}>Logout</IconButton>
                </Box>
            </Flex>
            <Box backgroundColor={''} h={'full'} px={'4rem'} py={'2rem'}>
                <Flex justifyContent={'space-between'}>
                    <span>List Barang</span>
                    <Button>
                        <PlusSquareIcon mr={1}/>
                        List Barang</Button>
                </Flex>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>
                                <span>ID</span>
                            </Th>
                            <Th>
                                <span>Title</span>
                            </Th>
                            <Th>
                                <span>Price</span>
                            </Th>
                            <Th>
                                <span>Category</span>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {[...Array(10)].map((x, i) =>
                            <Tr key={i}>
                                <Td>
                                    {i+1}
                                </Td>
                                <Td>
                                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                                </Td>
                                <Td>
                                    109.95
                                </Td>
                                <Td>
                                    men&apos;s clothing
                                </Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </Box>
        </Grid>
    )
}

export default Home
