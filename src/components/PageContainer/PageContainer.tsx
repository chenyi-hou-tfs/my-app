import style from './PageContainer.module.css'
import Navigator from '@/components/Navigator';
import NavigatorBar from '../NavigatorBar';
import { AppBar, Slide, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import { useRouter } from 'next/router';
import { tabPage } from '@/utils/constants';



const PageContainer = (props: any) => {
  const router = useRouter()
  const isTab = tabPage.includes(router.pathname)

  return (
    <>
      <NavigatorBar isTab={isTab} title={props.title}></NavigatorBar>
      <div className={style.container}>
        {props.children}
      </div>
      {isTab && <Navigator ></Navigator>}
    </>

  )
}

export default PageContainer