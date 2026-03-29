export default function ProcessSection() {
  const steps = [
    "We understand your business and current website situation",
    "We recommend the right package or system direction",
    "We design a cleaner and higher-value digital presence",
    "We launch and help you turn traffic into enquiries",
  ];

  return (
    <section id="process" className="px-0 py-20">
      <div className="container-main">
        <h2 className="section-title">Simple process. Serious outcome.</h2>
        <p className="section-subtitle">
          The goal is not to create long delays. The goal is to move from idea to a better business presentation quickly.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step} className="glass rounded-[1.75rem] p-6">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
                Step {i + 1}
              </div>
              <div className="mt-4 text-xl font-bold leading-8 text-white">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}