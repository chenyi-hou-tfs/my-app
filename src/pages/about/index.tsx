import PageContainer from "@/components/PageContainer/PageContainer"
import { Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../_app"
interface Product {
  title: string;
  url: string;
  desc: string;
  img?: string;
}

const About = (props) => {
  const router = useRouter()
  const c = useContext(AppContext)
  const [recommendProducts, setRecommendProducts] = useState<Product[]>([])
  useEffect(() => {
    if (!!c.userInfo.name) {
      fetch('http://localhost:3000/api/hello').then(res => res.json()).then(data => {
        setRecommendProducts(data.data)
      })
    }
  }, [c.userInfo])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {recommendProducts.length > 0 && c.userInfo.name ? (
        <div>
          {recommendProducts.map(p => {
            return (
              <div style={{ marginTop: '12px' }} key={p.title} >
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={p.img}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {p.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {p.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small" onClick={() => {
                      router.push({
                        pathname: p.url,
                        query: { title: p.title, img: p.img },
                      })
                    }}>Learn More</Button>
                  </CardActions>
                </Card>

              </div>

            )
          })}
        </div>
      ) :
        <div style={{ width: '100%', height: 'calc(100vh - 150px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress />
        </div>}
    </div>
  )
}

export default About