
import { flavorApi } from '@/api/flavor-api'
import Flavor from '@/api/flavor-interface'
import FlavorTable from '@/components/flavor-table'


export default async function Home() {    
  
  const flavors: Flavor[] = await flavorApi.getAllFlavors()

  return (
    <main>
        <FlavorTable flavors={flavors} />
    </main>
  )
}
