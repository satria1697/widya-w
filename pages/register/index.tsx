import {NextPage} from "next";
import MiAuthBox from "../../component/AuthBox";
import {Button, Center, Flex, FormControl, FormLabel, Grid, Select, useToast} from "@chakra-ui/react";
import MiInput from "../../component/Input";
import {ChangeEventHandler, FormEventHandler, useState} from "react";
import {useRouter} from "next/router";
import {ArrowBackIcon} from "@chakra-ui/icons";
import {register} from "../../repository/auth";
import {RegisterRequest, TGender} from "../../entities/request/auth";

interface iForm {
    email: string
    password: string
    gender: TGender,
    name: string
}

const Register: NextPage = () => {
    const router = useRouter()
    const toast = useToast()

    const [form, setForm] = useState<iForm>({
        email: '',
        password: '',
        gender: 'L',
        name: '',
    })

    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)

    const handleBack = () => {
        router.push('/login')
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault()
        setIsLoadingSubmit(true)
        const payload: RegisterRequest = {
            email: form.email,
            password: form.password,
            gender: form.gender,
            name: 'sen'
        }
        const res = await register(payload)
        if (res) {
            toast({
                status: 'success',
                title: "Berhasil Membuat Akun Baru"
            })
        } else {
            toast({
                status: 'error',
                title: "Gagal Membuat Akun Baru"
            })
        }
        router.push('/login')
        setIsLoadingSubmit(false)
    }

    const handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (event) => {
        const name = event.target.name

        if (name === 'w-email') {
            setForm((prev) => ({
                ...prev,
                email: event.target.value
            }))
        } else if (name === 'w-password') {
            setForm((prev) => ({
                ...prev,
                password: event.target.value
            }))
        } else if (name === 'w-gender') {
            setForm((prev) => ({
                ...prev,
                gender: event.target.value as TGender
            }))
        } else if (name === 'w-name') {
            setForm((prev) => ({
                ...prev,
                name: event.target.value
            }))
        }
    }

    return (
        <MiAuthBox>
            <Flex justifyContent={'flex-end'}>
                <Button onClick={handleBack}>
                    <ArrowBackIcon/>
                </Button>
            </Flex>
            <form onSubmit={handleSubmit}>
                <Grid templateRows='repeat(2,1fr)' gap='2' flexDirection='column'>
                    <MiInput onChange={handleChange} value={form.name} id='w-name' title='Name'/>
                    <MiInput onChange={handleChange} value={form.email} id='w-email' title='Email' type={"email"}/>
                    <MiInput onChange={handleChange} value={form.password} id='w-password' title='Password'
                             type='password'/>
                    <FormControl>
                        <FormLabel htmlFor={'w-gender'}>Gender</FormLabel>
                        <Select onChange={handleChange} id={'w-gender'} name={'w-gender'}>
                            <option>L</option>
                            <option>P</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Center mt='4'>
                    <Button isLoading={isLoadingSubmit} type='submit'>
                        <span>Register</span>
                    </Button>
                </Center>
            </form>
        </MiAuthBox>
    )
}

export default Register
