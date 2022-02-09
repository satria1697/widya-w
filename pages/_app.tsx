import {ChakraProvider, extendTheme, theme} from '@chakra-ui/react'
import type {AppProps} from "next/app";
import '../styles/globals.css'
import {useRouter} from "next/router";
import {FC} from "react";
import Head from "next/head";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter()

    const theme= {
        styles: {
            global: {
                'html, body': {
                    height: '100vh',
                    width: '100vw'
                }
            },
        },
    }
    const customTheme = extendTheme(theme)

  return (
      <>
          <Head>
              <title>Product Dashboard</title>
          </Head>
          <ChakraProvider theme={customTheme}>
              <Component {...pageProps} />
          </ChakraProvider>
      </>
  )
}

export default MyApp
