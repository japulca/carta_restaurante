function MenuSection(props) {
  return (
    <>
      <h2>{props.titulo}</h2>
      <img src={props.url} alt={props.alt} />
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>
            <span>{item.nombre}</span>
            <span>{item.precio.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MenuSection;
