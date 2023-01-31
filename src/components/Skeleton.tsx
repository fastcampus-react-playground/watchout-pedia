import React, {ReactNode, useMemo} from 'react';
import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  width?: number;
  height?: number;
  circle?: boolean;
  rounded?: boolean;
  count?: number;
  unit?: string;
  animation?: boolean;
  color?: string;
  style?: React.CSSProperties;
  children?: ReactNode | ReactNode[];
}

const pulseKeyframe = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const pulseAnimation = css`
  animation: ${pulseKeyframe} 1.5s ease-in-out 0.5s infinite;
`;

const Base = styled.span<Props>`
  ${({ color }) => color && `background-color: ${color}`};
  ${({ rounded }) => rounded && 'border-radius: 8px'};
  ${({ circle }) => circle && 'border-radius: 50%'};
  ${({ width, height }) => (width || height) && 'display: block'};
  ${({ animation }) => animation && pulseAnimation};
  width: ${({ width, unit }) => width && unit && `${width}${unit}`};
  height: ${({ height, unit }) => height && unit && `${height}${unit}`};
`;

const Content = styled.span`
  opacity: 0;
`;

const Skeleton: React.FC<Props> = ({
                                     animation = true,
                                     children,
                                     width,
                                     height,
                                     circle,
                                     rounded,
                                     count,
                                     unit = 'px',
                                     color = '#F4F4F4',
                                     style,
                                   }) => {
  const content = useMemo(() => [...Array({ length: count })].map(() => '-').join(''), [count]);

  return (
    <Base
      style={style}
      rounded={rounded}
      circle={circle}
      width={width}
      height={height}
      animation={animation}
      unit={unit}
      color={color}

    >
      <Content>{children || content}</Content>
    </Base>
  );
};

export default Skeleton;
