
import CardArea from '@/components/Home/CardArea/CardArea'
import CardSec from '@/components/Home/CardSec/CardSec'
import CateTitle from '@/components/Home/CategoriesTitle/CateTitle'
import FirstSec from '@/components/Home/FirstSection/FirstSec'
import InfoCards from '@/components/Home/InfoCards/InfoCards'
import ProdCards from '@/components/Home/ProdCards/ProdCards'
import ProductsSec from '@/components/Home/ProductsSec/ProductsSec'
import Subs from '@/components/Home/Subscribe/Subs'


export default function Home() {
  return (
    <>
    <FirstSec/>
    <CardSec/>
    <CateTitle/>
   <CardArea/>
    <ProductsSec/>
    <InfoCards/>
    <Subs/>
    </>
  )
}
