import {NextPage} from "next";
import MiAuthBox from "../../component/AuthBox";
import {Box, Button, Center, Flex, FormControl, FormLabel, Grid, Select} from "@chakra-ui/react";
import MiInput from "../../component/Input";
import {ChangeEventHandler, FormEventHandler, useState} from "react";
import {useRouter} from "next/router";
import {ArrowBackIcon} from "@chakra-ui/icons";

const Register: NextPage = () => {
    const router = useRouter()

    const [form, setForm] = useState({
        email: '',
        password: '',
        gender: 'L'
    })

    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)

    const handleBack = () => {
      router.push('/login')
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault()
        setIsLoadingSubmit(true)
        console.log(form)
        setTimeout(() => {
            router.push('/login')
            setIsLoadingSubmit(false)
        }, 1000)
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
                gender: event.target.value
            }))
        }
    }

    return (
        <MiAuthBox>
            <Flex justifyContent={'flex-end'}>
                <Button onClick={handleBack}>
                    <ArrowBackIcon />
                </Button>
            </Flex>
            <form onSubmit={handleSubmit}>
                <Grid templateRows='repeat(2,1fr)' gap='2' flexDirection='column'>
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
