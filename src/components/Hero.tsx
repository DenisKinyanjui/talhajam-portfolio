function Hero() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
        
      </div>
    </main>
  );
}

export default Hero;







// import { ArrowDown, BadgeCheck } from 'lucide-react'
// import Reveal from './Reveal'

// const tags = [
//   'Public Administration',
//   'Cybersecurity',
//   'IT Management',
//   'Policy & Tech',
//   'Avid Reader',
// ]

// function Hero() {
//   return (
//     <section
//       id="hero"
//       className="relative flex min-h-screen flex-col justify-center border-b border-line px-6 pt-24"
//     >
//       <div className="mx-auto w-full max-w-6xl">
//         <Reveal>
//           <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-gold-soft">
//             <BadgeCheck size={18} className="text-gold-soft" strokeWidth={2} />
//             Public Administration × Cybersecurity
//           </span>
//         </Reveal>

//         <Reveal delay={80}>
//           <h1 className="mt-8 font-heading text-5xl leading-[1.05] font-semibold text-bone sm:text-6xl lg:text-7xl">
//             <span>Talha</span> <span className="text-gold-soft">Ahmad</span>
//           </h1>
//         </Reveal>

//         <Reveal delay={140}>
//           <p className="mt-6 max-w-xl text-lg text-mute italic">
//             &ldquo;Only through time, time is conquered.&rdquo;
//             <span className="ml-2 text-sm text-mute-dim not-italic">
//               — T.S. Eliot
//             </span>
//           </p>
//         </Reveal>

//         <Reveal delay={200}>
//           <p className="mt-6 max-w-xl text-mute">
//             Public administrator turned cybersecurity scholar — bridging
//             governance, technology, and a lifelong love of reading.
//           </p>
//         </Reveal>

//         <Reveal delay={260}>
//           <ul className="mt-8 flex flex-wrap gap-2.5">
//             {tags.map((tag) => (
//               <li
//                 key={tag}
//                 className="rounded-lg border border-line px-3.5 py-1.5 text-sm text-mute"
//               >
//                 {tag}
//               </li>
//             ))}
//           </ul>
//         </Reveal>

//         <Reveal delay={320}>
//           <div className="mt-10 flex flex-wrap gap-4">
//             <a
//               href="#connect"
//               className="rounded-md bg-gold px-6 py-3 text-xs font-semibold tracking-[0.14em] text-ink uppercase transition-colors hover:bg-gold-soft"
//             >
//               Connect With Me
//             </a>
//             <a
//               href="#experience"
//               className="rounded-md border border-line px-6 py-3 text-xs font-semibold tracking-[0.14em] text-bone uppercase transition-colors hover:border-gold/60 hover:text-gold-soft"
//             >
//               See My Work
//             </a>
//           </div>
//         </Reveal>
//       </div>

//       <a
//         href="#about"
//         className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-mute-dim transition-colors hover:text-gold-soft"
//       >
//         <span className="text-[11px] tracking-[0.28em] uppercase">
//           Scroll
//         </span>
//         <ArrowDown size={14} className="animate-drift" />
//       </a>
//     </section>
//   )
// }

// export default Hero
