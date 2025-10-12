import MenuSection from "./MenuSection";

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
        <header>
          <h1>CAMPER CAFE</h1>
          <p>
            <em>Est 2020</em>
          </p>
        </header>

        <hr className="line lower" />

        {datosMenu.map((section, index) => (
          <MenuSection
            key={index}
            titulo={section.categoria}
            url={section.imagen.url}
            alt={section.imagen.alt}
            items={section.productos}
          />
        ))}

        <hr className="line lower" />

        <footer>
          <p>
            <u>Visit our website</u>
          </p>
          <p>123 Free Code Camp Drive</p>
        </footer>
      </div>
    </>
  );
}

export default App;
