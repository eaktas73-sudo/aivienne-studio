export default function TermsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 sm:px-12 md:px-24 py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-amber-400">Terms of Engagement & Production Standards</h1>
        <p className="text-xs text-neutral-400 font-mono">AI.VIENNE Studio+ · Legal & Operational Standards</p>
        
        <div className="space-y-6 text-sm text-neutral-300 leading-relaxed font-light border-t border-neutral-800 pt-8">
          <div>
            <h2 className="text-base font-bold text-amber-300 uppercase tracking-wide mb-2">1. Intellectual Property & Usage Rights</h2>
            <p>Upon full settlement of commercial production invoices, all delivered final master visual assets, motion files, and customized digital assets transition exclusively to the Client. The Client holds unrestricted worldwide commercial usage rights across digital flagships, broadcast television, print publications, and out-of-home media with zero perpetual royalty claims.</p>
          </div>
          <div>
            <h2 className="text-base font-bold text-amber-300 uppercase tracking-wide mb-2">2. Pre-Release Confidentiality & Mutual NDA</h2>
            <p>All client briefs, moodboards, unreleased collection sketches, and proprietary brand assets are protected under Mutual Non-Disclosure Agreements upon request. AI.VIENNE Studio+ conducts production on isolated, secure compute environments to ensure confidentiality prior to official release.</p>
          </div>
          <div>
            <h2 className="text-base font-bold text-amber-300 uppercase tracking-wide mb-2">3. Chromatic Calibration & Revisions</h2>
            <p>Commissions include structured revision rounds covering chromatic balance, material shader tuning, reflection angles, and composition framing to guarantee adherence to the approved brief.</p>
          </div>
          <div>
            <h2 className="text-base font-bold text-amber-300 uppercase tracking-wide mb-2">4. Master Resolution Standards</h2>
            <p>Primary campaign deliverables are output at genuine high resolutions (up to 8K master stills where required) or uncompressed high-frame-rate motion files calibrated for high-end digital displays and print media.</p>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800">
          <a href="/" className="inline-block px-6 py-3 rounded-full bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all">
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}