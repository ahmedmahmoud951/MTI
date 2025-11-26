import dynamicImport from 'next/dynamic'

export const dynamic = 'force-dynamic'

const VisualizationClient = dynamicImport(() => import('./client').then((mod) => mod.default), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-full items-center justify-center bg-slate-950 text-white">
      <div className="space-y-4 text-center">
        <div className="inline-flex h-16 w-16 animate-spin rounded-full border-4 border-white/20 border-t-cyan-500" />
        <p className="text-lg font-semibold">Loading immersive experience...</p>
      </div>
    </div>
  ),
})

export default function VisualizationPage() {
  return <VisualizationClient />
}
