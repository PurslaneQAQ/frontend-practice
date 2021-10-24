import avatar from './images/image-jeremy.png';
import WorkIcon from './images/icon-work.svg';
import PlayIcon from './images/icon-play.svg';
import StudyIcon from './images/icon-study.svg';
import ExerciseIcon from './images/icon-exercise.svg';
import SocialIcom from './images/icon-social.svg';
import SelfCareIcon from './images/icon-self-care.svg';

export enum ACTIVITY_TYPE {
  WORK,
  PLAY,
  STUDY,
  EXERCISE,
  SOCIAL,
  SELF_CARE,
}

export const ActivityIcons = {
  [ACTIVITY_TYPE.WORK]: WorkIcon,
  [ACTIVITY_TYPE.PLAY]: PlayIcon,
  [ACTIVITY_TYPE.STUDY]: StudyIcon,
  [ACTIVITY_TYPE.EXERCISE]: ExerciseIcon,
  [ACTIVITY_TYPE.SOCIAL]: SocialIcom,
  [ACTIVITY_TYPE.SELF_CARE]: SelfCareIcon,
};

export const ActivityColors = {
  [ACTIVITY_TYPE.WORK]: 'LightOrange',
  [ACTIVITY_TYPE.PLAY]: 'SoftBlue',
  [ACTIVITY_TYPE.STUDY]: 'LightRed',
  [ACTIVITY_TYPE.EXERCISE]: 'LimeGreen',
  [ACTIVITY_TYPE.SOCIAL]: 'Violet',
  [ACTIVITY_TYPE.SELF_CARE]: 'SoftOrange',
};

export const MockProfile = {
  avatar,
  userName: 'Jeremy Robson',
};

export enum TIME_FRAME {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
}

export const timeFrameLabel = {
  [TIME_FRAME.DAILY]: 'Day',
  [TIME_FRAME.WEEKLY]: 'Week',
  [TIME_FRAME.MONTHLY]: 'Month',
};

export type timeframeData = Record<TIME_FRAME, {current:number, previous: number}>;
