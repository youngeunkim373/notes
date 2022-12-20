import Carousel from "../components/Carousel";

const udemyList = [
  {
    title: "(ReactTS) Expense report",
    img: `${process.env.PUBLIC_URL}/static/images/chick.gif`,
    desc: "˚ React 동작원리\n˚ props & state 관리\n˚ state lifting\n˚ 이벤트 관리\n˚ 조건부 렌더링\n˚ 모달 관리",
    path: "/udemy/react/expenseReport",
  },
  {
    title: "(ReactTS) Redux",
    img: `${process.env.PUBLIC_URL}/static/images/chick.gif`,
    desc: "˚ Redux 사용법",
    path: "/udemy/react/reduxPractice",
  },
];

const Home = () => {
  return (
    <Carousel
      title="Udemy"
      desc="Udemy 실습자료들 카테고리입니다."
      list={udemyList}
    />
  );
};

export default Home;
