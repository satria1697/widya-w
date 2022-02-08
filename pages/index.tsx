import type {NextPage} from 'next'
import {
    Box,
    Button,
    ButtonGroup,
    Center,
    Flex,
    Grid,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Spinner,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr, useToast
} from "@chakra-ui/react";
import {CloseIcon, EditIcon, LockIcon, PlusSquareIcon} from "@chakra-ui/icons";
import {useRouter} from "next/router";
import {createProduct, deleteProduct, getAllProducts, updateProduct} from "../repository/product";
import {ChangeEventHandler, FormEventHandler, useEffect, useState} from "react";
import {Product} from "../entities/Product";
import MiInput from "../component/Input";
import {ProductEditRequest} from "../entities/request/product";
import withAuth from "../HOC/withAuth";
import {logout} from "../repository/auth";

const Home: NextPage = () => {
    const router = useRouter()
    const toast = useToast()

    const [data, setData] = useState<Array<Product>>([])

    const [isLoadingInit, setIsLoadingInit] = useState(true)

    const [isShow, setIsShow] = useState(false)

    const [productSelected, setProductSelected] = useState<Product | null>(null)

    const [isLoadingSend, setIsLoadingSend] = useState(false)

    const handleModal = (state: boolean = false, id: Product | null = null) => {
        setProductSelected(id)
        setIsShow(state)
    }

    const init = () => {
        setIsLoadingInit(true)
        getAllProducts().then(res => {
            setData(res)
            setIsLoadingInit(false)
        })
    }

    useEffect(() => {
        init()
    }, [])

    const handleClose =  async () => {
        await logout()
        router.push('/login')
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const name = event.target.name
        if (name === 'w-title') {
            setProductSelected({
                ...productSelected,
                title: event.target.value ?? ""
            })
        } else if (name === 'w-description') {
            setProductSelected({
                ...productSelected,
                description: event.target.value ?? ""
            })
        } else if (name === 'w-price') {
            setProductSelected({
                ...productSelected,
                price: Number(event.target.value) ?? 0
            })
        }
    }

    const handleDelete = async (id?: number) => {
        if (id) {
            const payload: ProductEditRequest = {
                id
            }
            const res = await deleteProduct(payload)

            showToast(res, "Menghapus")
            init()
        } else {
            console.log("id not exist")
        }
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        setIsLoadingSend(true)
        event.preventDefault()
        const payload: ProductEditRequest = {
            id: productSelected?.id,
            price: productSelected?.price,
            title: productSelected?.title,
            description: productSelected?.description
        }

        let res = false
        let wording = "Mengupdate"
        if (productSelected?.id) {
            res = await updateProduct(payload)
        } else {
            res = await createProduct(payload)
            wording = "Membuat"
        }

        showToast(res, wording)
        init()
        setIsShow(false)

        setIsLoadingSend(false)
    }

    const showToast = (status: boolean, wording = 'Membuat') => {
        if (status) {
            toast({
                title: `Berhasil ${wording} data`,
                status: 'success'
            })
        } else {
            toast({
                title: `Gagal ${wording} data`,
                status: 'error'
            })
        }
    }

    return (
        <>
            <Modal motionPreset="slideInBottom" onClose={handleModal} isOpen={isShow}>
                <ModalOverlay/>
                <ModalContent pb={5}>
                    <ModalHeader>Login now</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <form onSubmit={handleSubmit}>
                            <Flex flexDirection={'column'}>
                                <MiInput id={'w-title'} title={'Nama Barang'} value={productSelected?.title ?? ''}
                                         onChange={handleChange}/>
                                <MiInput id={'w-description'} title={'Deskripsi Barang'}
                                         value={productSelected?.description ?? ''} onChange={handleChange}/>
                                <MiInput id={'w-price'} title={'Harga Barang'}
                                         value={String(productSelected?.price) ?? ''} onChange={handleChange}
                                         type={'number'}/>
                            </Flex>
                            <Flex justifyContent={'end'} mt={4}>
                                <ButtonGroup spacing={2}>
                                    <Button onClick={() => handleModal()} colorScheme={'red'}
                                            type={'button'}>Keluar</Button>
                                    <Button isLoading={isLoadingSend} colorScheme={'blue'}
                                            type={'submit'}>Simpan</Button>
                                </ButtonGroup>
                            </Flex>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Grid templateRows={'3rem 1fr'} h={'100vh'}>
                <Flex alignItems={'center'} px={'1rem'} h={'full'} justifyContent={'space-between'} borderBottom={'1px'}
                      borderColor={'gray.300'}>
                    <Box>
                        <span>Hello, User</span>
                    </Box>
                    <Box>
                        <IconButton type={'button'} onClick={handleClose} aria-label={'logout'}
                                    icon={<LockIcon/>}>Logout</IconButton>
                    </Box>
                </Flex>
                <Box backgroundColor={''} h={'full'} px={'4rem'} py={'2rem'}>
                    <Flex justifyContent={'space-between'}>
                        <span>List Barang</span>
                        <Button onClick={() => handleModal(true)} leftIcon={<PlusSquareIcon/>}>
                            Tambah Barang</Button>
                    </Flex>
                    {isLoadingInit ?
                        <Center h={'full'}>
                            <Spinner/>
                        </Center> :
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
                                            <ButtonGroup>
                                                <Button onClick={() => handleModal(true, x)} leftIcon={<EditIcon/>}
                                                        colorScheme={"yellow"}>Edit</Button>
                                                <Button onClick={() => handleDelete(x.id)} leftIcon={<CloseIcon/>}
                                                        colorScheme={"red"}>Delete</Button>
                                            </ButtonGroup>
                                        </Td>
                                    </Tr>
                                )}
                            </Tbody>
                        </Table>
                    }
                </Box>
            </Grid>
        </>
    )
}

export default withAuth(Home)
