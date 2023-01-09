import React, { forwardRef, Ref } from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import * as styles from './select.css';
import cx from 'classnames';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';

interface SelectProps {
  items: string[];
  label?: string;
  placeholder?: string;
}

const Select = ({ items, label, placeholder }: SelectProps) => {
  const itemList = items.map((item) => {
    return <SelectItem value={item}>{item}</SelectItem>;
  });
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger className={styles.selectTrigger} aria-label={label}>
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Content className={styles.selectContent}>
        <RadixSelect.ScrollUpButton className={styles.selectScrollButton}>
          <ChevronUpIcon />
        </RadixSelect.ScrollUpButton>
        <RadixSelect.Viewport className={styles.selectViewport}>
          <RadixSelect.Group>
            {label && (
              <RadixSelect.Label className={styles.selectLabel}>
                {label}
              </RadixSelect.Label>
            )}
            {itemList}
          </RadixSelect.Group>
        </RadixSelect.Viewport>
        <RadixSelect.ScrollDownButton className={styles.selectScrollButton}>
          <ChevronDownIcon />
        </RadixSelect.ScrollDownButton>
      </RadixSelect.Content>
    </RadixSelect.Root>
  );
};

interface SelectItemProps extends RadixSelect.SelectItemProps {
  children: React.ReactNode;
  className?: string;
}

const SelectItem = forwardRef<HTMLInputElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <RadixSelect.Item
        className={cx('SelectItem', className)}
        ref={forwardedRef}
        {...props}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        <RadixSelect.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </RadixSelect.ItemIndicator>
      </RadixSelect.Item>
    );
  },
);

export default Select;
