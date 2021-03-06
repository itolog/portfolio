import React, { memo } from 'react';
import { IconContext } from 'react-icons';

interface Props {
  icon: React.ReactChild;
  color?: string;
  size?: string;
}

const CustomIcon: React.FC<Props> = memo(({ icon, color = 'white', size }) => {
  return (
    <IconContext.Provider value={{ color, size }}>
      <div>{icon}</div>
    </IconContext.Provider>
  );
});

export default CustomIcon;
