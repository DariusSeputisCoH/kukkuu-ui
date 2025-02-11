import { FunctionComponent, useState } from 'react';
import uniqueId from 'lodash/uniqueId';

import angleDownIcon from '../../../assets/icons/svg/angleDown.svg';
import styles from './collapsible.module.scss';
import Icon from '../icon/Icon';
import Paragraph from '../paragraph/Paragraph';

interface Item {
  header: string;
  body: string;
}

interface CollapsibleProps {
  item: Item;
}

const Collapsible: FunctionComponent<CollapsibleProps> = ({ item }) => {
  const [id] = useState(uniqueId('collapsible_'));
  const [isOpen, toggleCollapsible] = useState(false);

  return (
    <div className={isOpen ? styles.show : ''}>
      <button
        aria-expanded={isOpen}
        aria-controls={id}
        className={styles.header}
        onClick={() => toggleCollapsible(!isOpen)}
      >
        <h3>{item.header}</h3>
        <Icon src={angleDownIcon} alt={''} className={styles.arrow} />
      </button>
      <div id={id} aria-hidden={!isOpen} className={styles.content}>
        <Paragraph text={item.body} />
      </div>

      <hr />
    </div>
  );
};

export default Collapsible;
