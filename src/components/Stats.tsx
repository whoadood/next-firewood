const stats = [
  {
    stat: "5 mile",
    description: "Radius of 19406",
  },
  {
    stat: "24/7",
    description: "Delivery",
  },
  {
    stat: "100%",
    description: "Satisfied customers",
  },
];

export default function Stats() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Stats
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Take a look at our stats
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit.
          </p>
        </div>

        {/* changes */}
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-0 md:gap-y-10 md:px-6">
            {stats.map((stat) => (
              <div
                key={stat.stat}
                className="relative flex justify-center items-center flex-col px-2 py-8 md:shadow rounded"
              >
                <dt>
                  <p className="text-4xl leading-6 font-medium text-indigo-600">
                    {stat.stat}
                  </p>
                </dt>
                <dd className="mt-4 text-xl font-medium text-gray-900">
                  {stat.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
