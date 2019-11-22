import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

import styles from './notEligible.module.scss';
import Button from '../../../common/components/button/Button';
import adultFaceIcon from '../../../assets/icons/svg/adultFace.svg';
import Icon from '../../../common/components/icon/Icon';

const NotEligible: FunctionComponent = () => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1>{t('homePage.hero.heading')}</h1>
          <p className={styles.description}>
            {t('homePage.hero.descriptionText')}
          </p>
          <div className={styles.notEligible}>
            <Icon
              className={styles.notEligibleFace}
              src={adultFaceIcon}
              alt="Non eligible really sad face"
            />
            <p>{t('registration.notEligible.text')}</p>
          </div>
          <div className={styles.goBackButton}>
            <Button onClick={() => history.goBack()}>
              {t('common.goBack.text')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotEligible;
