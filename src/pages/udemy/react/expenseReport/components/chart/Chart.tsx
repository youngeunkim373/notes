import styled from "styled-components";
import ChartBar from "./ChartBar";

interface ChartProps {
  dataPoints: { label: string; value: number }[];
  maxValue: number;
}

const Chart = ({ dataPoints, maxValue }: ChartProps) => {
  return (
    <Container>
      {dataPoints.map((datePoint) => (
        <ChartBar
          key={datePoint.label}
          label={datePoint.label}
          maxValue={maxValue}
          value={datePoint.value}
        />
      ))}
    </Container>
  );
};

export default Chart;

const Container = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;
