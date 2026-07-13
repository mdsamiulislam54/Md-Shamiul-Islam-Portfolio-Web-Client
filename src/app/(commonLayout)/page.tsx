import HeroPage from "@/components/layout/hero"
import { Container } from "@/components/provider/container"
import { getProfileData } from "../(dashboardLayout)/admin/profile/_action"
import { getAllProject } from "../(dashboardLayout)/admin/project/_actions";
import Project from "@/components/layout/Project";
import EducationCards from "@/components/layout/Education";


export default async function Home() {
  const [hero, project] = await Promise.all([
    getProfileData(),
    getAllProject()
  ])


  return (
    <main>
      <section>
        <Container>
          <HeroPage data={hero.data} />
        </Container>
      </section>
      <section className="py-20 lg:py-20">
        <Container>
          <Project project={project} />
        </Container>
      </section>
      <section className="py-20 lg:py-28">
        <Container>
          <EducationCards/>
        </Container>
      </section>
    </main>
  )
}