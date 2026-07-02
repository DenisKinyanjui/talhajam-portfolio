import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const bullets = [
  'Proposed a structured waste collection scheduling plan to reduce overflow incidents in high-density residential areas, improving operational efficiency.',
  'Developed a written proposal outlining pollution-control measures including controlled disposal zones, public awareness signage placement, and community reporting mechanisms.',
  'Collaborated with management-level staff to assess current waste segregation gaps and recommend a phased implementation strategy for improved sorting infrastructure.',
  'Contributed to planning documents advocating for designated recycling zones in commercial districts to reduce landfill dependency.',
  'Engaged with ground-level teams to understand logistical barriers to clean-up operations, incorporating field feedback into management-level recommendations.',
]

const tags = [
  'Urban Planning',
  'Policy Proposals',
  'Pollution Control',
  'Civic Engagement',
  'Stakeholder Communication',
  'Waste Management',
]

function Experience() {
  return (
    <section id="experience" className="border-b border-line px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div>
            <SectionHeading index="03" eyebrow="Work" title="Experience" />
            <div className="mt-6 h-px w-full max-w-md bg-gradient-to-r from-gold/70 to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 rounded-lg border border-line border-l-2 border-l-gold bg-panel px-7 py-8 sm:px-9">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-heading text-2xl font-semibold text-bone">
                  Social Worker &amp; Management Contributor
                </h3>
                <p className="mt-1 text-sm font-medium text-gold-soft">
                  City Waste Management Department
                </p>
              </div>
              <span className="rounded border border-line px-3 py-1 text-xs font-medium tracking-[0.1em] whitespace-nowrap text-mute">
                2 Months · 2022
              </span>
            </div>

            <p className="mt-5 max-w-3xl text-[15px] leading-[1.75] text-mute">
              Worked within the city's waste management authority at the
              management level, contributing to operational planning and
              community-facing initiatives focused on cleanliness,
              sustainability, and urban pollution control. This short but
              impactful role bridged my background in public administration
              with real grassroots civic work.
            </p>

            <ul className="mt-6 space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-[15px] leading-[1.7] text-mute">
                  <span className="mt-2.5 h-px w-3 shrink-0 bg-gold" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-7 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line px-3 py-1 text-xs text-mute"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Experience
