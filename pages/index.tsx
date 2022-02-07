import type {NextPage} from 'next'
import {Box, Button, ButtonGroup, Flex, Grid, IconButton, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {PlusSquareIcon, LockIcon, CloseIcon, EditIcon} from "@chakra-ui/icons";
import {useRouter} from "next/router";
import {getAllProducts} from "../repository/product";
import {useEffect, useState} from "react";
import {Product} from "../entities/Product";

const Home: NextPage = () => {
    const router = useRouter()

    const [data, setData] = useState<Array<Product>>([])

    useEffect(() => {
        getAllProducts().then(res => {
            console.log(res)
            setData(res)
        })
    }, [])

    const handleClose = () => {
        router.push('/login')
    }
    return (
        <Grid templateRows={'3rem 1fr'} h={'100vh'}>
            <Flex alignItems={'center'} px={'1rem'} h={'full'} justifyContent={'space-between'} borderBottom={'1px'}
                  borderColor={'gray.300'}>
                <Box>
                    <span>Hello, User</span>
                </Box>
                <Box>
                    <IconButton type={'button'} onClick={handleClose} aria-label={'logout'} icon={<LockIcon/>}>Logout</IconButton>
                </Box>
            </Flex>
            <Box backgroundColor={''} h={'full'} px={'4rem'} py={'2rem'}>
                <Flex justifyContent={'space-between'}>
                    <span>List Barang</span>
                    <Button leftIcon={<PlusSquareIcon />}>
                        Tambah Barang</Button>
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
                            <Th>
                                <span>Action</span>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((x, i) =>
                            <Tr key={i}>
                                <Td>
                                    {x.id}
                                </Td>
                                <Td>
                                    {x.title}
                                </Td>
                                <Td>
                                    {x.price}
                                </Td>
                                <Td>
                                    {x.category}
                                </Td>
                                <Td>
                                    <ButtonGroup>
                                        <Button leftIcon={<EditIcon />} colorScheme={"yellow"}>Edit</Button>
                                        <Button leftIcon={<CloseIcon />} colorScheme={"red"}>Delete</Button>
                                    </ButtonGroup>
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
