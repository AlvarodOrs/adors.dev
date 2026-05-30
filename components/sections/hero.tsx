export function Hero() {
  return (
    <section className="pt-24 pb-16">
      <p className="text-neutral-500 text-sm mb-3 tracking-widest uppercase">adors.dev</p>
      <h1 className="text-3xl font-normal text-neutral-100 mb-2">
        Álvaro d&apos;Ors Nestares
      </h1>
      <p className="text-neutral-400 mb-6">
        Computer Engineering Student · UNIR
      </p>
      <div className="flex gap-4 text-sm">
        <a href="https://social.adors.dev/github/" target="_blank" rel="noopener noreferrer"
          className="text-neutral-500 hover:text-neutral-200 transition-colors">
          github ↗
        </a>
        <a href="https://social.adors.dev/linkedin" target="_blank" rel="noopener noreferrer"
          className="text-neutral-500 hover:text-neutral-200 transition-colors">
          linkedin ↗
        </a>
        <a href="mailto:a.dors.nestares@gmail.com"
          className="text-neutral-500 hover:text-neutral-200 transition-colors">
          email ↗
        </a>
      </div>
    </section>
  )
}
