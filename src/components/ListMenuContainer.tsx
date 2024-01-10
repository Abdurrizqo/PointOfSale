import CardMenuComponent from "./CardMenuComponent";

function ListMenuContainer() {
  return (
    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-5 overflow-auto p-5 h-screen">
      {/* Loop Mulai Dari Sini */}
      <CardMenuComponent />
      <CardMenuComponent />
      <CardMenuComponent />
      <CardMenuComponent />
      <CardMenuComponent />
      <CardMenuComponent />
      {/* Sampai Sini */}
    </div>
  );
}

export default ListMenuContainer;
