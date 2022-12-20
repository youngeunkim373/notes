import { Link } from "react-router-dom";
import styled from "styled-components";

interface CardProps {
  desc: string;
  img: string;
  path: string;
  title: string;
}

function Card({ desc, img, path, title }: CardProps) {
  const onClickCard = () => {
    console.log(title);
  };

  return (
    <Link to={path}>
      <Container onClick={onClickCard}>
        <div className="imgContainer">
          <img alt="card" src={img} />
        </div>
        <div className="description">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </Container>
    </Link>
  );
}

export default Card;

const Container = styled.div`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  height: 336px;
  margin: 10px;
  text-align: left;
  width: 300px;

  h3 {
    font-weight: bold;
    margin: 0;
    padding: 10px 0px 3px 0px;
  }

  .imgContainer {
    background: pink;
    text-align: center;
  }

  img {
    max-width: 300px;
    max-height: 150px;
    padding: 10px;
  }

  .description {
    padding: 0 0.8rem;
  }

  p {
    font-size: 14px;
    font-weight: 100;
    margin: 5px 0px 0px 0px;
    white-space: pre-line;
  }
`;
