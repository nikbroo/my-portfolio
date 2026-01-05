"use client";

import Container from "../layout/Container";
import Button from "../layout/Button";

const Header = () => {
  const handleRoute = () => {
    window.scrollTo({
      top: document.getElementById("contact")?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Container className="flex justify-between items-center border-b border-white/10 px-4 md:px-8">
      <h1 className="text-xl font-bold">{`<Nikhil Garg />`}</h1>
      <div>
        <Button onClick={handleRoute}>Get in touch</Button>
      </div>
    </Container>
  );
};

export default Header;
