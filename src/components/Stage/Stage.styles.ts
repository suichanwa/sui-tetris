import styled from 'styled-components';
import { STAGE_WIDTH, STAGE_HEIGHT } from '../../setup';

// Sizes the board off its own box (via container query units) instead of the
// viewport, so it always exactly fills whatever space the flex layout gives it.
export const StyledStageContainer = styled.div`
  container-type: size;
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledStage = styled.div`
  --cell-size: clamp(
    10px,
    min((100cqw - ${STAGE_WIDTH + 1}px) / ${STAGE_WIDTH}, (100cqh - ${STAGE_HEIGHT + 1}px) / ${STAGE_HEIGHT}),
    30px
  );
  display: grid;
  grid-template-columns: repeat(${STAGE_WIDTH}, var(--cell-size));
  grid-template-rows: repeat(${STAGE_HEIGHT}, var(--cell-size));
  grid-gap: 1px;
  border: 1px solid #777;
  background: #222;
`;
