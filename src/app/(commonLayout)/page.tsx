import HeroPage from "@/components/layout/hero"
import { Container } from "@/components/provider/container"
import { getProfileData } from "../(dashboardLayout)/admin/profile/_action"
import { getAllProject } from "../(dashboardLayout)/admin/project/_actions";
import Project from "@/components/layout/Project";


export default async function Home() {
  const [hero, project] = await Promise.all([
    getProfileData(),
    getAllProject()
  ])


  return (
    <main>
      <section>
        <Container>
          {/* {JSON.stringify(res.data)} */}
          <HeroPage data={hero.data} />
        </Container>
      </section>
      <section className="py-20 lg:py-28">
        <Container>
          <Project project={project} />
        </Container>
      </section>
    </main>
  )
}