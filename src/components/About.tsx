import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function About() {
  return (
    <section id="about" className="border-b border-line px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading index="01" eyebrow="Who I Am" title="About Me" />
        </Reveal>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={80}>
            <div className="space-y-5 text-[15px] leading-[1.75] text-mute">
              <p>
                I'm a multidisciplinary thinker with roots in{' '}
                <strong className="font-medium text-bone">
                  public administration
                </strong>{' '}
                and a growing passion for{' '}
                <strong className="font-medium text-bone">
                  cybersecurity and information technology
                </strong>
                . My academic journey has taken me from understanding how
                governments and institutions function, to exploring how
                digital systems can be secured and made resilient in a
                connected world.
              </p>
              <p>
                Having worked in{' '}
                <strong className="font-medium text-bone">
                  city-level waste management
                </strong>{' '}
                — where I proposed and helped develop plans to streamline
                waste operations and reduce urban pollution — I understand
                what it means to take ideas from paper into practice. I know
                that real-world change requires both strategic thinking and
                the willingness to do the hard work on the ground.
              </p>
              <p>
                Outside of academics and professional life, I'm an{' '}
                <strong className="font-medium text-bone">
                  avid reader
                </strong>
                . Books are where I find clarity, challenge my assumptions,
                and stay curious. Whether it's policy literature, technology
                ethics, or fiction — I believe reading is one of the most
                underrated professional skills there is.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="space-y-4">
              <div className="rounded-lg border border-line border-l-2 border-l-gold bg-panel px-6 py-5">
                <p className="font-heading text-3xl font-semibold text-gold-soft">
                  2+
                </p>
                <p className="mt-1 text-sm text-mute">
                  Years of cross-disciplinary experience
                </p>
              </div>

              <div className="rounded-lg border border-line border-l-2 border-l-gold bg-panel px-6 py-5">
                <p className="font-heading text-3xl font-semibold text-gold-soft">
                  2
                </p>
                <p className="mt-1 text-sm text-mute">
                  Academic degrees (one ongoing)
                </p>
              </div>

              <div className="rounded-lg border border-line border-l-2 border-l-moss bg-panel-raised px-6 py-5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-moss" />
                  <span className="text-xs font-medium tracking-[0.16em] text-moss uppercase">
                    Currently Active
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  Pursuing a Master's in Information Technology with a major
                  in Cybersecurity (2024–2026). Open to networking,
                  collaborations, and conversations around tech, governance,
                  and ideas.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
