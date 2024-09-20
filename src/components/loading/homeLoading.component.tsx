const HomeLoader = () => {
  return (
    <div className="flex min-h-screen justify-center items-center space-x-4">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`relative flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-400 animate-pulse`}
          style={{ animationDelay: `${i * 0.3}s` }}
        >
          <div
            className="absolute bg-gray-900 w-12 h-12 rounded-full"
            style={{ animationDelay: `${i * 0.3}s`, animationDuration: '2s', animationIterationCount: 'infinite' }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default HomeLoader;
