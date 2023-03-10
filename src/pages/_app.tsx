import PageContainer from '@/components/PageContainer/PageContainer';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { useContext, useState, createContext, useEffect } from 'react';

export const AppContext = createContext<any>({
  userInfo: {
    name: null,
    id: null
  },
  setUserInfo: () => { }
})

export default function App({ Component, pageProps }: AppProps) {
  const [userInfo, setUserInfo] = useState({
    name: '',
    id: 1,
  })

  useEffect(() => {
    setTimeout(() => {
      setUserInfo({
        name: 'nihao',
        id: 1111
      })
    }, 3000)
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppContext.Provider value={{
        userInfo,
        setUserInfo
      }}>
        <PageContainer>
          <Component {...pageProps} />
        </PageContainer>
      </AppContext.Provider>
    </>
  )

}
