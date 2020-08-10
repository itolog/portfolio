import React, { memo } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

interface Props {
  color: string;
  count: number;
  highlightColor: string;
}

const SkeletonLoader: React.FC<Props> = memo(
  ({ color, count, highlightColor }) => {
    return (
      <SkeletonTheme color={color} highlightColor={highlightColor}>
        <Skeleton count={count} />
      </SkeletonTheme>
    );
  },
);

export default SkeletonLoader;
