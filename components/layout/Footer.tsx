import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-deep-blue text-white/70 py-8">
      <div className="max-w-content mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <div>© 2025 GEO 内测服务 · 认知型咨询</div>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-warm-gold transition">关于</Link>
          <Link href="#" className="hover:text-warm-gold transition">隐私</Link>
          <Link href="#" className="hover:text-warm-gold transition">联系</Link>
        </div>
      </div>
    </footer>
  )
}
