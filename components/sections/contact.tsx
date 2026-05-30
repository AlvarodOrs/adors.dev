export function Contact() {
  return (
    <section className="pb-24 border-t border-neutral-800 pt-10">
      <h2 className="text-xs text-neutral-500 tracking-widest uppercase mb-4">Contact</h2>
      <div className="flex flex-col gap-2 text-sm text-neutral-400">
        <a href="mailto:a.dors.nestares@gmail.com" className="hover:text-neutral-200 transition-colors">
          a.dors.nestares@gmail.com
        </a>
        <a href="https://social.adors.dev/linkedin" target="_blank" rel="noopener noreferrer"
          className="hover:text-neutral-200 transition-colors">
          linkedin.com/in/alvaro-dors ↗
        </a>
      </div>
    </section>
  )
}
