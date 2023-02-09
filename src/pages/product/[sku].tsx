import PageContainer from "@/components/PageContainer/PageContainer"
import { useRouter } from "next/router"

const Sku = (props) => {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      {router.query.sku}
    </div>
  )
}

export default Sku