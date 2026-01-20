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
  ERROR = 'ERROR'
}