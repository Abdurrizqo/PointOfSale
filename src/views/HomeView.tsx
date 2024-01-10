import ListMenuContainer from "../components/ListMenuContainer";
import NavbarComponent from "../components/NavbarComponent";
import TotalHargaContainer from "../components/TotalHargaContainer";

function HomeComponent() {
  return (
    <div className="flex flex-col relative">
      <NavbarComponent />
      <div className="flex relative">
        <ListMenuContainer />
        <TotalHargaContainer />
      </div>
    </div>
  );
}

export default HomeComponent;
