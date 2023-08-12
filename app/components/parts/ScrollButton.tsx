import { FC } from 'react';
import { scrollToIdWithOffset } from '../utils/scroll';

interface ScrollButtonProps {
  targetId: string;
  offset: number;
  label: string;
  className: string;
}

const ScrollButton: FC<ScrollButtonProps> = ({ targetId, offset, label, className }) => {
  const handleClick = () => {
    scrollToIdWithOffset(targetId, offset);
  };

  return (
    <button className={className} onClick={handleClick}>
      {label}
    </button>
  );
};

export default ScrollButton;
