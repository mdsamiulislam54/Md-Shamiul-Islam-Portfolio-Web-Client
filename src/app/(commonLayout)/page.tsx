import HeroPage from "@/components/layout/hero"
import { Container } from "@/components/provider/container"
import { getProfileData } from "../(dashboardLayout)/admin/profile/_action"


export default async function Home() {
  const res = await getProfileData();

  return (
    <main>
      <section>
        <Container>
          {/* {JSON.stringify(res.data)} */}
          <HeroPage data={res.data}/>
        </Container>
      </section>
    </main>
  )
}