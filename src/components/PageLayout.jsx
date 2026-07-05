import Sidebar from "./Sidebar";

function PageLayout({ children }) {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <Sidebar />

      <div className="ml-72 p-10 max-w-[1600px]">
        {children}
      </div>
    </div>
  );
}

export default PageLayout;