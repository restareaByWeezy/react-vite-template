import Lottie from 'react-lottie-player';
import { spinner } from '@/assets/lotties';

import * as styles from './loader.css';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
}

const Loader = ({ size }: LoaderProps) => {
  return (
    <div className={styles.wrapper({ size: size })}>
      <Lottie
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        loop
        animationData={spinner}
        play
      />
    </div>
  );
};

export default Loader;
