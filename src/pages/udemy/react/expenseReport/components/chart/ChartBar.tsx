import styled from "styled-components";

interface ChartBarProps {
  height?: string;
  label: string;
  maxValue: number;
  value: number;
}

const ChartBar = ({ label, maxValue, value }: ChartBarProps) => {
  let fillPercentage = "0%";
  if (maxValue > 0) {
    fillPercentage = Math.round((value / maxValue) * 100) + "%";
  }
  //console.log(value + "/" + maxValue + "/" + fillPercentage);

  return (
    <Container height={fillPercentage}>
      <div className="inner">
        <div className="fill"></div>
      </div>
      <div className="label">{label}</div>
    </Container>
  );
};

export default ChartBar;

const Container = styled.div<{ height: string }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;

  .inner {
    background-color: #c3b4f3;
    border: 1px solid #313131;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    overflow: hidden;
    width: 100%;
  }

  .fill {
    background-color: #4826b9;
    height: ${({ height }) => height};
    transition: all 0.3s ease-out;
    width: 100%;
  }

  .label {
    font-size: 0.5rem;
    font-weight: bold;
    text-align: center;
  }
`;
