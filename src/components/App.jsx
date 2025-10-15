import MenuSection from "./MenuSection";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const datosMenu = [
    {
      categoria: "Coffee",
      imagen: {
        url: "https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg",
        alt: "un cafecito",
      },
      productos: [
        { nombre: "French Vanilla", precio: 3.0 },
        { nombre: "Caramel Macchiato", precio: 3.75 },
        { nombre: "Pumpkin Spice", precio: 3.5 },
        { nombre: "Hazelnut", precio: 4.0 },
        { nombre: "Mocha", precio: 4.5 },
      ],
    },
    {
      categoria: "Desserts",
      imagen: {
        url: "https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg",
        alt: "un dulcito",
      },
      productos: [
        { nombre: "Donut", precio: 1.5 },
        { nombre: "Cherry Pie", precio: 2.75 },
        { nombre: "Cheesecake", precio: 3.0 },
        { nombre: "Cinnamon Roll", precio: 2.5 },
      ],
    },
  ];

  return (
    <>
      <div className="main">
        <Header titulo="CAMPER CAFE" parrafo="Est 2020" />

        {datosMenu.map((section, index) => (
          <MenuSection
            key={index}
            titulo={section.categoria}
            url={section.imagen.url}
            alt={section.imagen.alt}
            items={section.productos}
          />
        ))}

        <Footer
          web="https://www.freecodecamp.org"
          direction="123 Free Code Camp Drive"
        />
      </div>
    </>
  );
}

export default App;
