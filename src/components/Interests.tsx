import { BookOpen, KeyRound, Landmark, Leaf } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const items = [
  {
    icon: KeyRound,
    title: 'Cybersecurity',
    description:
      'Understanding how systems can be protected, how threats evolve, and how digital safety intersects with public trust and policy.',
    color: 'text-gold-soft border-gold/40',
  },
  {
    icon: Landmark,
    title: 'Governance & Policy',
    description:
      'How institutions are structured, how decisions get made, and how technology increasingly shapes public administration.',
    color: 'text-bone border-line',
  },
  {
    icon: Leaf,
    title: 'Urban Sustainability',
    description:
      'A real-world interest born from experience — how cities can better manage resources, reduce pollution, and build cleaner futures.',
    color: 'text-moss border-moss/40',
  },
  {
    icon: BookOpen,
    title: 'Reading & Ideas',
    description:
      'A daily habit and a core part of who I am. Books on technology, society, philosophy, and fiction all have a place on my shelf.',
    color: 'text-slate border-slate/40',
  },
]

function Interests() {
  return (
    <section id="interests" className="border-b border-line px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Focus Areas"
            title="What I Care About"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="group h-full rounded-lg border border-line bg-panel px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-md border bg-panel-raised ${item.color}`}
                >
                  <item.icon size={19} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-bone">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.7] text-mute">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interests
