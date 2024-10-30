const Header = () => {
  return (
    <section className="flex flex-col lg:flex-row md:justify-between items-center my-8 space-y-4">
      {/* Logo */}
      <h1 className="text-gray-800 font-bold text-3xl">Chef&apos;s Table</h1>
      {/* menu start */}
      <ul className="flex gap-6 text-gray-600 font-semibold text-base">
        <li>
          <a href=" ">Home</a>
        </li>
        <li>
          <a href=" ">Recipes</a>
        </li>
        <li>
          <a href=" ">About</a>
        </li>
        <li>
          <a href=" ">Search</a>
        </li>
      </ul>
      {/* menu end */}

      <div className="flex flex-row justify-between items-center gap-4">
        {/* search */}
        <div className="flex justify-between items-center relative">
          <input
            className="py-4 px-12 bg-gray-100 rounded-full outline-none placeholder:text-sm"
            type="text"
            placeholder="Search"
          />
          <div className="absolute inset-y-0 left-3 pl-4 flex items-center">
            <i className="fa-solid fa-magnifying-glass text-sm text-gray-500"></i>
          </div>
        </div>
        {/* search end */}

        <div className="bg-green-400 flex items-center justify-center rounded-full w-12 h-12">
            <i className="fa-regular fa-user-circle text-gray-700 text-3xl"></i>
        </div>
      </div>
    </section>
  );
};

export default Header;
