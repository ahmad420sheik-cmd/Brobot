import { useState, useRef, useEffect } from "react";

export default function Knowledge() {
  const [pages, setPages] = useState(["Page 1"]);
  const [activePage, setActivePage] = useState("Page 1");
  const [content, setContent] = useState("");

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const addPage = () => {
    const newPage = `Page ${pages.length + 1}`;
    setPages([...pages, newPage]);
    setActivePage(newPage);
    setDropdownOpen(false);
  };

  return (
    <div className="flex gap-6 p-6">

      {/* 🔹 LEFT SIDEBAR */}
      <div className="w-[250px]">

        {/* SEARCH */}
        <input
          placeholder="Search..."
          className="w-full px-3 py-2 border rounded-lg mb-4 text-sm"
        />

        {/* PAGES */}
        <div className="space-y-2">
          {pages.map((page, i) => (
            <div
              key={i}
              onClick={() => setActivePage(page)}
              className={`px-3 py-2 rounded-lg cursor-pointer text-sm border ${
                activePage === page
                  ? "bg-gray-100 border-gray-300"
                  : "hover:bg-gray-50"
              }`}
            >
              📄 {page}
            </div>
          ))}
        </div>

      </div>

      {/* 🔹 RIGHT PANEL */}
      <div className="flex-1 bg-white rounded-2xl shadow border">

        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b">

          <div>
            <h2 className="font-semibold text-lg flex items-center gap-2">
              📚 Knowledge
            </h2>
            <p className="text-sm text-gray-500">
              Add knowledge to your AI
            </p>
          </div>

          {/* 🔥 ADD DROPDOWN */}
          <div className="relative" ref={dropdownRef}>

            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-black text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2"
            >
              + Add
              <span>▾</span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border rounded-xl shadow-lg overflow-hidden z-50">

                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    console.log("Upload File");
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-2 text-sm"
                >
                  📎 File
                </button>

                <button
                  onClick={addPage}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-2 text-sm"
                >
                  📄 Page
                </button>

                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    console.log("Add Website");
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-2 text-sm"
                >
                  🌐 Website
                </button>

              </div>
            )}

          </div>
        </div>

        {/* TITLE */}
        <div className="px-6 pt-4">
          <label className="text-sm text-gray-500">Title</label>

          <input
            value={activePage}
            onChange={(e) => setActivePage(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />
        </div>

        {/* TOOLBAR */}
        <div className="px-6 py-3 border-b flex items-center gap-4 text-sm text-gray-500 mt-4">
          <button className="font-bold">B</button>
          <button className="italic">I</button>
          <button className="underline">U</button>

          <div className="w-px h-4 bg-gray-300"></div>

          <button>• List</button>
          <button>H2</button>

          <div className="w-px h-4 bg-gray-300"></div>

          <button className="text-xs">Clear format</button>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Add instructions, rules, examples or context for the AI here..."
            className="w-full h-[300px] resize-none outline-none text-sm"
          />
        </div>

        {/* FOOTER */}
        <div className="px-6 py-3 border-t text-xs text-gray-400 flex justify-between">
          <span>Characters: {content.length}</span>
          <span>Total: 0 / 10,000 · Source: Text</span>
        </div>

      </div>

    </div>
  );
}