import styled from "styled-components";

type Props = {
  width: number;
  height: number;
}

export const StyledStage = styled.div<Props>`
  display: grid;
  grid-template-rows: repeat(
    ${(props: { height: any; }) => props.height},
    calc(25vw / ${(props: { width: any; }) => props.width})
  );
  grid-template-columns: repeat(${(props: { width: any; }) => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;
`;
