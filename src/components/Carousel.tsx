import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

interface CarouselProps {
  desc: string;
  list: any[];
  title: string;
}

function Carousel({ desc, list, title }: CarouselProps) {
  const linkedList = (num: number): { [key: string]: any } => {
    return {
      prevIdx: list.length % 2 === 0 ? list.length - num : list.length - 1,
      nextIdx: num,
      prev: list.slice(
        list.length % 2 === 0 ? list.length - num : list.length - num + 1,
        list.length
      ),
      cur: list.slice(0, num),
      next: list.slice(num, num * 2),
      num: num,
    };
  };

  const [currentSlide, setSlide] = useState(linkedList(2));

  const onClickPrevArrow = () => {
    const newPrevIdx =
      currentSlide.prevIdx - currentSlide.num >= 0
        ? currentSlide.prevIdx - currentSlide.num
        : list.length % 2 === 0
        ? list.length - currentSlide.num
        : list.length - currentSlide.num + 1;
    const newNextIdx =
      currentSlide.nextIdx - currentSlide.num >= 0
        ? currentSlide.nextIdx - currentSlide.num
        : list.length % 2 === 0
        ? list.length - currentSlide.num
        : list.length - currentSlide.num + 1;

    setSlide({
      ...currentSlide,
      prevIdx: newPrevIdx,
      nextIdx: newNextIdx,
      next: currentSlide.cur,
      cur: currentSlide.prev,
      prev: list.slice(newPrevIdx, newPrevIdx + currentSlide.num),
    });
  };

  const onClickNextArrow = () => {
    const newPrevIdx =
      currentSlide.prevIdx + currentSlide.num <= list.length - 1
        ? currentSlide.prevIdx + currentSlide.num
        : 0;
    const newNextIdx =
      currentSlide.nextIdx + currentSlide.num <= list.length - 1
        ? currentSlide.nextIdx + currentSlide.num
        : 0;

    setSlide({
      ...currentSlide,
      prevIdx: newPrevIdx,
      nextIdx: newNextIdx,
      prev: currentSlide.cur,
      cur: currentSlide.next,
      next: list.slice(newNextIdx, newNextIdx + currentSlide.num),
    });
  };

  return (
    <Container>
      <TitleContainer>
        <h2>{title}</h2>
        <p>{desc}</p>
      </TitleContainer>
      <CarouselContainer>
        <span className="arrow" onClick={onClickPrevArrow}>
          {"<"}
        </span>
        {currentSlide.cur.map((el: { [key: string]: any }, idx: number) => (
          <Card
            key={idx}
            title={el.title}
            img={el.img}
            desc={el.desc}
            path={el.path}
          />
        ))}
        <span className="arrow" onClick={onClickNextArrow}>
          {">"}
        </span>
      </CarouselContainer>
    </Container>
  );
}

export default Carousel;

const Container = styled.div`
  height: 400px;
  margin: 50px auto;
  width: 80%;
`;

const CarouselContainer = styled.div`
  align-items: center;
  display: flex;
  height: 336px;
  justify-content: space-between;
  margin: 40px;

  .arrow {
    cursor: pointer;
    font-size: 50px;
  }
`;

const TitleContainer = styled.div`
  h2 {
    font-weight: bold;
    margin: 0;
  }

  p {
    font-family: "Noto Serif KR", serif;
    font-weight: 100;
    margin: 0;
    padding: 7px 0px;
  }
`;
