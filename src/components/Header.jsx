const Header = ({ titulo, parrafo }) => {
  return (
    <>
      <header>
        <h1>{titulo}</h1>
        <p>
          <em>{parrafo}</em>
        </p>
      </header>

      <hr className="line lower" />
    </>
  );
};

export default Header;
