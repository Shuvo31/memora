import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../theme/ThemeProvider';
import { Home, Image as ImageIcon, MessageCircle, Book } from 'lucide-react-native';

// Types
import { MainTabParamList, HomeStackParamList, MemoriesStackParamList, ChatStackParamList, JournalStackParamList } from './types';

// Screens
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { MemoriesScreen } from '../screens/MemoriesScreen';
import { MemoryDetailScreen } from '../screens/MemoryDetailScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { JournalScreen } from '../screens/JournalScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const MemoriesStack = createNativeStackNavigator<MemoriesStackParamList>();
const ChatStack = createNativeStackNavigator<ChatStackParamList>();
const JournalStack = createNativeStackNavigator<JournalStackParamList>();

const HomeNavigator = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="HomeVault" component={HomeScreen} />
    <HomeStack.Screen name="Settings" component={SettingsScreen} />
  </HomeStack.Navigator>
);

const MemoriesNavigator = () => (
  <MemoriesStack.Navigator screenOptions={{ headerShown: false }}>
    <MemoriesStack.Screen name="MemoryFeed" component={MemoriesScreen} />
    <MemoriesStack.Screen name="MemoryDetail" component={MemoryDetailScreen} />
  </MemoriesStack.Navigator>
);

const ChatNavigator = () => (
  <ChatStack.Navigator screenOptions={{ headerShown: false }}>
    <ChatStack.Screen name="SoulChat" component={ChatScreen} />
  </ChatStack.Navigator>
);

const JournalNavigator = () => (
  <JournalStack.Navigator screenOptions={{ headerShown: false }}>
    <JournalStack.Screen name="JournalMain" component={JournalScreen} />
  </JournalStack.Navigator>
);

export const TabNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: theme.border,
        },
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.textTertiary,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'HomeTab') return <Home color={color} size={size} />;
          if (route.name === 'MemoriesTab') return <ImageIcon color={color} size={size} />;
          if (route.name === 'ChatTab') return <MessageCircle color={color} size={size} />;
          if (route.name === 'JournalTab') return <Book color={color} size={size} />;
          return null;
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeNavigator} options={{ title: 'Home' }} />
      <Tab.Screen name="MemoriesTab" component={MemoriesNavigator} options={{ title: 'Memories' }} />
      <Tab.Screen name="ChatTab" component={ChatNavigator} options={{ title: 'Chat' }} />
      <Tab.Screen name="JournalTab" component={JournalNavigator} options={{ title: 'Journal' }} />
    </Tab.Navigator>
  );
};
