function SectionHeading({
  index,
  eyebrow,
  title,
  align = 'left',
}: {
  index: string
  eyebrow: string
  title: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <div
        className={`flex items-center gap-3 text-xs font-medium tracking-[0.24em] text-gold-soft/80 uppercase ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span>
          {index} — {eyebrow}
        </span>
        {align === 'left' && <span className="h-px flex-1 max-w-24 bg-line" />}
      </div>
      <h2 className="mt-4 font-heading text-3xl font-semibold text-bone sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}

export default SectionHeading
