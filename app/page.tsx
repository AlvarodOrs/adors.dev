import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { Contact } from '@/components/sections/contact'
import { getAllProjects } from '@/lib/projects'

export default function Home() {
  const projects = getAllProjects()
  return (
    <main className="max-w-2xl mx-auto px-6">
      <Hero />
      <Projects projects={projects} />
      <Contact />
    </main>
  )
}
