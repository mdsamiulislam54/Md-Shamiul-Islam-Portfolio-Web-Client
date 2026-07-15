import HeroPage from "@/components/layout/hero"
import { Container } from "@/components/provider/container"
import { getProfileData } from "../(dashboardLayout)/admin/profile/_action"
import { getAllProject } from "../(dashboardLayout)/admin/project/_actions";
import Project from "@/components/layout/Project";
import EducationCards from "@/components/layout/Education";
import ContactPage from "@/components/layout/Contact";
import About from "@/components/layout/About";
import { getAbout } from "../(dashboardLayout)/admin/about/_actions";


export default async function Home() {
  const [hero, project,about] = await Promise.all([
    getProfileData(),
    getAllProject(),
    getAbout()
  ])


  return (
    <main>
      <section className="overflow-hidden rounded-3xl border bg-gradient-to-br from-background via-background to-primary/50">
        <Container>
          <HeroPage data={hero} />
        </Container>
      </section>
      <section className="py-20 lg:py-20">
        <Container>
          <About about={about} profileImage={hero.profileImages}/>
        </Container>
      </section>
      <section className="py-20 lg:py-20">
        <Container>
          <Project project={project} />
        </Container>
      </section>
      <section className="py-20 lg:py-28">
        <Container>
          <EducationCards />
        </Container>
      </section>
      <section className="py-20 lg:py-28">
        <Container>
          <ContactPage />
        </Container>
      </section>
    </main>
  )
}