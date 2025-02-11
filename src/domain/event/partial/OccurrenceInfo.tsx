import { useTranslation } from 'react-i18next';
import joinClassNames from 'classnames';
import { IconCalendar, IconLocation, IconClock } from 'hds-react';

import { formatTime, newMoment } from '../../../common/time/utils';
import { DEFAULT_DATE_FORMAT } from '../../../common/time/TimeConstants';
import { childByIdQuery_child_occurrences_edges_node as OccurrenceType } from '../../api/generatedTypes/childByIdQuery';
import { occurrenceQuery_occurrence as OccurrenceQueryType } from '../../api/generatedTypes/occurrenceQuery';
import { formatOccurrenceTime, getParticipantsIcon } from '../EventUtils';
import InfoItem, { InfoItemProps } from './InfoItem';
import styles from './occurrenceInfo.module.scss';

type Props = {
  className?: string;
  occurrence: OccurrenceQueryType | OccurrenceType;
  show?: string[];
};

const OccurrenceInfo = ({
  className,
  occurrence,
  show = ['time', 'duration', 'participants', 'venue'],
}: Props) => {
  const { t } = useTranslation();

  const infoItems: InfoItemProps[] = [
    {
      id: 'venue',
      icon: <IconLocation />,
      label: occurrence.venue.name || '',
      description: occurrence.venue.address || undefined,
      fullWidth: true,
    },
    {
      id: 'time',
      icon: <IconCalendar />,
      label: formatTime(newMoment(occurrence.time), DEFAULT_DATE_FORMAT),
    },
    {
      id: 'duration',
      icon: <IconClock />,
      label: formatOccurrenceTime(occurrence.time, occurrence.event.duration),
    },
    {
      id: 'participants',
      icon: getParticipantsIcon(occurrence.event.participantsPerInvite),
      label: t(
        `event.participantsPerInviteEnum.${occurrence.event.participantsPerInvite}`
      ),
    },
  ];

  return (
    <div className={joinClassNames(className, styles.row)}>
      {infoItems.map(
        (item, index) =>
          show.some((id) => id === item.id) && (
            <InfoItem
              key={index}
              id={item.id}
              className={joinClassNames(
                className,
                styles.label,
                item.className
              )}
              icon={item.icon}
              label={item.label}
              description={item.description}
              fullWidth={item.fullWidth}
            />
          )
      )}
    </div>
  );
};

export default OccurrenceInfo;
