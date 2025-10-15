const Footer = ({ web, direction }) => {
  return (
    <footer>
      <hr className="line lower" />
      <p>
        <a href={web} target="_blank" rel="noopener noreferrer">
          Visit our website
        </a>
      </p>
      <p>{direction}</p>
    </footer>
  );
};

export default Footer;
