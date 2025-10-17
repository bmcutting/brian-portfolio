export const Timeline = () => {
  return (
    <div className="dark:bg-gray-800 bg-violet-50 p-9 rounded-2xl">
      <ol className="relative border-s-2 border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-5 h-5 bg-primary rounded-full mt-2 -start-2.75 border-5 border-white dark:border-backgroundDark dark:bg-primaryDark"></div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            🎓 Formación académica
          </h3>
          <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400">
            Ingeniero en Automática, especializado en software industrial.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-5 h-5 bg-primary rounded-full mt-2 -start-2.75 border-5 border-white dark:border-backgroundDark dark:bg-primaryDark"></div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            💼 Experiencia profesional
          </h3>
          <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400">
            Prácticas profesionales como especialista en software industrial.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-5 h-5 bg-primary rounded-full mt-2 -start-2.75 border-5 border-white dark:border-backgroundDark dark:bg-primaryDark"></div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            🧠 Backend
          </h3>
          <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400">
            Desarrollo con .NET (C#), APIs REST y arquitecturas limpias.
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-5 h-5 bg-primary rounded-full mt-2 -start-2.75 border-5 border-white dark:border-backgroundDark dark:bg-primaryDark"></div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            🎨 Frontend
          </h3>
          <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400">
            Interfaces modernas con React y Tailwind CSS.
          </p>
        </li>
      </ol>
    </div>
  );
};
