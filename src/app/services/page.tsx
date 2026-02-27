export default function ServicesPage() {
  return (
    <>
     {/* <section className="py-20 bg-slate-900"> */}
      <h2 className="text-3xl text-center font-bold mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-10">
        <div className="bg-slate-800 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-3">Web Development</h3>
          <p className="text-gray-400">
            Secure and scalable ASP.NET Core applications.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-3">Mobile Apps</h3>
          <p className="text-gray-400">
            Cross-platform Flutter apps for Android & iOS.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-3">ERP Systems</h3>
          <p className="text-gray-400">
            Complete management systems for institutions.
          </p>
        </div>
      </div>
    {/* </section> */}
    </>
  )
}