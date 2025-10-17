export const HabilitiesLayout = ({ habilities, label }) => {
  return (
    <div className="bg-violet-50 dark:bg-gray-800 rounded-2xl lg:p-2 gap-3 p-4">
      <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
        {label}
      </h3>
      <div className="grid grid-cols-2 items-center gap-2 lg:mb-8">
        {habilities.map((item) => (
          <div
            className="flex flex-col items-center
            rounded-lg transition-transform hover:scale-105 max-h-60"
            key={item.label}
          >
            <div className="flex flex-col items-center justify-center w-3/4 lg:mb-2 lg:w-9/10">
              <img
                src={item.img}
                alt={item.label}
                className="object-contain max-w-2/3 max-h-2/3 lg:max-w-8/10"
              />
              <span className="mt-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
