export default function Footer() {
  return (
    <footer className="bg-slate-900  border-t border-white/10 text-center py-6">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Adwise Technology. All rights reserved.
      </p>
    </footer>
  )
}

