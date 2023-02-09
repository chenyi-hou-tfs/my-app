import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import { Button } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter()
  return (
    <>

      <div>
        hi
      </div>
      <Button
        variant="outlined"
        onClick={() => {
          router.push('/about')
        }}>
        go to about

      </Button>

    </>
  )
}
