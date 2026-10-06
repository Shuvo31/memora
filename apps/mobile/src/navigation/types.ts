import { NavigatorScreenParams } from '@react-navigation/native';

export type OnboardingStackParamList = {
  Welcome: undefined;
  WhoToRemember: undefined;
  AddPerson: undefined;
};

export type HomeStackParamList = {
  HomeVault: undefined;
  Settings: undefined;
};

export type MemoriesStackParamList = {
  MemoryFeed: undefined;
  MemoryDetail: { memoryId?: string }; // Make it optional for now
};

export type ChatStackParamList = {
  SoulChat: undefined;
};

export type JournalStackParamList = {
  JournalMain: undefined;
};

export type MainTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  MemoriesTab: NavigatorScreenParams<MemoriesStackParamList>;
  ChatTab: NavigatorScreenParams<ChatStackParamList>;
  JournalTab: NavigatorScreenParams<JournalStackParamList>;
};

export type RootStackParamList = {
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
  
  // Modals
  AddMemoryModal: undefined;
  FamilyInviteModal: undefined;
  AnniversaryRitualModal: undefined;
  CandleRitualModal: undefined;
};
