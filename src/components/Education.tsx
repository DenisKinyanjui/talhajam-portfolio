import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const entries = [
  {
    years: '2024 – 2026',
    degree: 'Master of Information Technology',
    major: 'Major in Cyber Security',
    description:
      'Deepening expertise in digital security, network infrastructure, information systems management, and the intersection of technology and policy. Currently in progress.',
    status: 'In Progress',
    statusColor: 'border-slate/50 text-slate',
  },
  {
    years: '2016 – 2020',
    degree: 'Bachelor of Science',
    major: 'Public Administration',
    description:
      'Built a strong foundation in governance, public policy, organizational management, and civic systems. Developed skills in institutional thinking, stakeholder communication, and planning — skills that continue to inform everything I do.',
    status: 'Completed',
    statusColor: 'border-gold/50 text-gold-soft',
  },
]

function Education() {
  return (
    <section id="education" className="border-b border-line px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Background"
            title="Education"
          />
        </Reveal>

        <div className="mt-14 space-y-14 border-l border-line pl-8 sm:pl-10">
          {entries.map((entry, i) => (
            <Reveal key={entry.degree} delay={i * 100}>
              <div className="relative">
                <span className="absolute top-1.5 -left-[41px] h-2.5 w-2.5 rounded-full border-2 border-gold bg-ink sm:-left-[49px]" />
                <p className="text-xs font-medium tracking-[0.18em] text-mute-dim uppercase">
                  {entry.years}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-bone">
                  {entry.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate">
                  {entry.major}
                </p>
                <p className="mt-3 max-w-2xl text-[15px] leading-[1.75] text-mute">
                  {entry.description}
                </p>
                <span
                  className={`mt-4 inline-block rounded border px-2.5 py-1 text-[11px] font-medium tracking-[0.14em] uppercase ${entry.statusColor}`}
                >
                  {entry.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
