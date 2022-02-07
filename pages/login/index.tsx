import type {NextPage} from 'next'
import {Button, Grid, SimpleGrid} from "@chakra-ui/react";
import {ChangeEventHandler, FormEventHandler, useState} from "react";
import MiInput from "../../component/Input";
import {useRouter} from "next/router";
import MiAuthBox from "../../component/AuthBox";

const Login: NextPage = () => {
    const router = useRouter()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)

    const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault()
        setIsLoadingSubmit(true)
        setTimeout(() => {
            if (form.email === 'spanuu' && form.password === '123') {
                router.push('/')
            }
            setIsLoadingSubmit(false)
        }, 1000)
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const name = event.target.name

        if (name === 'w-username') {
            setForm((prev) => ({
                ...prev,
                email: event.target.value
            }))
        } else if (name === 'w-password') {
            setForm((prev) => ({
                ...prev,
                password: event.target.value
            }))
        }
    }

    const handleRegister = () => {
        router.push('/register')
    }

    return (
        <MiAuthBox>
            <form onSubmit={handleSubmit}>
                <Grid templateRows='repeat(2,1fr)' gap='2' flexDirection='column'>
                    <MiInput onChange={handleChange} value={form.email} id='w-username' title='Username'/>
                    <MiInput onChange={handleChange} value={form.password} id='w-password' title='Password'
                             type='password'/>
                </Grid>
                <SimpleGrid mt='4' columns={2} gap={4}>
                    <Button isLoading={isLoadingSubmit} type='submit'>
                        <span>Login</span>
                    </Button>
                    <Button onClick={handleRegister} type='button'>
                        <span>Register</span>
                    </Button>
                </SimpleGrid>
            </form>
        </MiAuthBox>
    )
}

export default Login
