
export interface TikTokProfile {
  username: string;
  displayName: string;
  followers: number;
  avatarUrl: string;
  bio: string;
}

export interface CareerLevel {
  level: number;
  title: string;
  description: string;
  benefits: string[];
  image?: string;
  progress?: number;
}

export enum VerificationStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  FINISHED = 'FINISHED'
}

export enum AlignmentScore {
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5'
}
