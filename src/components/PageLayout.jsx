import Sidebar from "./Sidebar";

function PageLayout({ children }) {
  return (
    <div className="bg-black min-h-screen text-white">
      <Sidebar />

      <div className="ml-64 p-8 max-w-[1400px]">
        {children}
      </div>
    </div>
  );
}

export default PageLayout;