import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  return (
    <>
      <Container>
        <>
          <MenuContainer>
            <span>⋮</span>
          </MenuContainer>
          <TitleContainer>
            <Link to="/">
              <h1>The Note</h1>
            </Link>
            <p>a note for writing down what I've tried</p>
          </TitleContainer>
          <SearchContainer>
            <input id="search" placeholder=" " type="text" />
            <label htmlFor="search">Please enter your keyword</label>
            <img
              alt="search"
              src={`${process.env.PUBLIC_URL}/static/icons/search.png`}
            />
          </SearchContainer>
        </>
      </Container>
      <Divider />
    </>
  );
}

export default Nav;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 300px;
  flex-wrap: norwap;
  justify-content: space-between;
  padding: 30px;
  text-align: center;
`;

const Divider = styled.hr`
  background: #d4d4ed;
  border: 0;
  height: 1px;
`;

const MenuContainer = styled.div`
  flex: 1;

  span {
    cursor: pointer;
    float: left;
    font-size: 30px;
    text-align: left;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  position: relative;

  img {
    cursor: pointer;
    height: 20px;
    width: 20px;
  }

  input {
    border: 0;
    border-bottom: 1px solid #e0e0e0;
    height: 30px;
    margin-right: 10px;
    width: 200px;

    &:focus {
      border-bottom: 1px solid black;
      transition: all 0.3s ease;
    }
  }

  label {
    bottom: -5px;
    color: #c6c6c6;
    font-weight: 100;
    height: 100%;
    right: 10px;
    pointer-events: none;
    position: absolute;
    text-align: left;
    width: 200px;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    color: #5fa8d3;
    font-size: 14px;
    transform: translate(-20px, -20px);
    transition: all 0.3s ease;
  }

  input:not(:focus) + label,
  input:placeholder-shown + label {
    transition: all 0.3s ease;
  }
`;

const TitleContainer = styled.div`
  flex: 1;

  h1 {
    font-family: "Lora", serif;
    font-weight: normal;
  }

  p {
    font-weight: 100;
    margin: 5px 0px 0px 0px;
  }
`;
