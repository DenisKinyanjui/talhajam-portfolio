import { Mail } from 'lucide-react'
import Reveal from './Reveal'
import { InstagramIcon, LinkedInIcon } from './SocialIcons'

const socials = [
  { label: 'LinkedIn', icon: LinkedInIcon, href: 'https://www.linkedin.com/in/talha-ahmad-69288a41b?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
  { label: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/talha_jam007?igsh=MXZsNWE1cmdvMW56Ng%3D%3D&utm_source=qr' },
  { label: 'Email', icon: Mail, href: 'mailto:talhaahmad18b@gmail.com' },
]

function Connect() {
  return (
    <section id="connect" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="rounded-xl border border-line bg-panel px-8 py-16 text-center sm:px-16">
            <h2 className="font-heading text-3xl font-semibold text-bone sm:text-4xl">
              Let's <span className="text-gold-soft">Connect</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-mute">
              Whether you want to talk ideas, collaborate on something
              meaningful, or just say hello — my socials are open.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm text-bone transition-colors hover:border-gold/50 hover:text-gold-soft"
                >
                  <social.icon size={16} />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Connect
