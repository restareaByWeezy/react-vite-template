import { Danger } from '@/assets/svgs';
import Text from '@/components/Text/Text';
import { iconHover } from '@/styles/utils.css';

import * as styles from './widgetLayout.css';

const WidgetTypes = {
  DEFAULT: 'default',
  SIMPLE_LIST: 'simpleList',
} as const;

type WidgetType = (typeof WidgetTypes)[keyof typeof WidgetTypes];

interface WidgetHeaderProps {
  type?: WidgetType;
  title?: string;
}

const WidgetHeader = ({ type, title }: WidgetHeaderProps) => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.textWrapper}>
        <Text size="h4" weight="bold">
          {title || 'widget'}
        </Text>
      </div>
      <div>
        <Danger className={iconHover} />
      </div>
    </div>
  );
};

export default WidgetHeader;
