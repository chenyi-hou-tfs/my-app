// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: any[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: [
      {
        title: 'NuPAGE™ 4% 至 12%，Bis-Tris，1.0 mm，小型蛋白凝胶，2D 孔',
        desc: 'Invitrogen NuPAGE Bis-Tris 蛋白凝胶是预制聚丙烯酰胺凝胶，可提供宽范围分子量蛋白分离，具有高分离度并保持样品完整性',
        img: 'https://assets.thermofisher.com/TFS-Assets/CCG/product-images/Mini-Gels.jpg-250.jpg',
        url: '/product/' + encodeURIComponent('NuPAGE™ 4% 至 12%，Bis-Tris，1.0 mm，小型蛋白凝胶，2D 孔')
      },
      {
        title: '胰蛋白酶-EDTA (0.25%)，含酚红',
        desc: 'Porcine parvovirus and mycoplasma tested. Contains 2.5 g/L of Trypsin ...',
        img: 'https://assets.thermofisher.com/TFS-Assets/BID/product-images/25200072_650x600.jpg-250.jpg',
        url: '/product/' + encodeURIComponent('胰蛋白酶-EDTA (0.25%)，含酚红')
      },
      {
        title: 'NuPAGE™ MES SDS 电泳缓冲液 (20X)',
        desc: 'Cassette clamps are replacement parts for the ',
        img: 'https://assets.thermofisher.com/TFS-Assets/BID/product-images/26616_g25g_650x600.jpg-250.jpg',
        url: '/product/' + encodeURIComponent('NuPAGE™ MES SDS 电泳缓冲液 (20X)')
      }
    ]
  })
}
