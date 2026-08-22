import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Typography } from '../components/Typography';

const { width } = Dimensions.get('window');

const QUICK_ACTIONS = [
  { icon: '🕯️', label: 'Light\nCandle', color: '#FFF3E0' },
  { icon: '✍️', label: 'Write\nMemory', color: '#F3E5F5' },
  { icon: '💬', label: 'Soul\nChat', color: '#E8F5E9' },
  { icon: '📖', label: 'Journal', color: '#E3F2FD' },
];

const RECENT_MEMORIES = [
  { id: '1', emoji: '🌺', text: 'Her famous biryani recipe...', date: '2 days ago', color: '#FFF8EE' },
  { id: '2', emoji: '🎵', text: 'The lullaby she always sang...', date: '5 days ago', color: '#F3E5F5' },
  { id: '3', emoji: '🌅', label: 'Morning tea ritual...', date: '1 week ago', color: '#E8F5E9' },
];

const getGreeting = () => {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
};

export const HomeScreen = () => {
  const { theme } = useTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(24)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.background }]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

        {/* ── Header ── */}
        <Animated.View style={[styles.header, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
          <View>
            <Typography variant="caption" color={theme.textTertiary} style={styles.greeting}>
              {getGreeting()} ✦
            </Typography>
            <Typography variant="h1" style={styles.headerTitle}>
              Maa's Vault
            </Typography>
          </View>
          <TouchableOpacity style={[styles.notifBtn, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
            <Text style={styles.notifIcon}>🔔</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* ── Hero Profile Card ── */}
        <Animated.View style={{ opacity: fadeAnim }}>
          <View style={[styles.heroCard, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
            {/* Soft gradient tint overlay */}
            <View style={[styles.heroTint, { backgroundColor: theme.primary + '12' }]} />

            <View style={styles.heroContent}>
              {/* Avatar */}
              <View style={[styles.heroAvatar, { borderColor: theme.primary + '60', backgroundColor: theme.primary + '20' }]}>
                <Text style={styles.heroAvatarEmoji}>🌸</Text>
              </View>

              <View style={styles.heroInfo}>
                <Typography variant="h2" style={styles.heroName}>Maa</Typography>
                <Typography variant="caption" color={theme.textSecondary} style={styles.heroSub}>
                  My Mother  ·  Forever in my heart
                </Typography>
                <View style={styles.heroDates}>
                  <Text style={[styles.dateChip, { color: theme.textTertiary, backgroundColor: theme.background }]}>
                    🎂 Jul 3, 1958
                  </Text>
                  <Text style={[styles.dateChip, { color: theme.primary, backgroundColor: theme.primary + '15' }]}>
                    🕊 Forever with us
                  </Text>
                </View>
              </View>
            </View>

            {/* Stats row */}
            <View style={[styles.statsRow, { borderTopColor: theme.cardBorder }]}>
              {[
                { value: '847', label: 'Memories' },
                { value: '23', label: 'Journal entries' },
                { value: '142', label: 'Soul chats' },
              ].map((s, i) => (
                <View key={i} style={styles.statItem}>
                  <Text style={[styles.statValue, { color: theme.text }]}>{s.value}</Text>
                  <Text style={[styles.statLabel, { color: theme.textTertiary }]}>{s.label}</Text>
                </View>
              ))}
            </View>
          </View>
        </Animated.View>

        {/* ── Today's Ritual ── */}
        <View style={styles.section}>
          <Typography variant="label" color={theme.textTertiary} style={styles.sectionLabel}>
            TODAY'S RITUAL
          </Typography>
          <TouchableOpacity
            activeOpacity={0.85}
            style={[styles.ritualCard, { backgroundColor: theme.primary }]}
          >
            <View style={styles.ritualLeft}>
              <Text style={styles.ritualEmoji}>🕯️</Text>
              <View style={{ marginLeft: 14 }}>
                <Text style={styles.ritualTitle}>Evening Candle</Text>
                <Text style={styles.ritualSub}>Light a candle in her memory</Text>
              </View>
            </View>
            <View style={styles.ritualArrow}>
              <Text style={styles.ritualArrowText}>›</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* ── Quick Actions ── */}
        <View style={styles.section}>
          <Typography variant="label" color={theme.textTertiary} style={styles.sectionLabel}>
            QUICK ACTIONS
          </Typography>
          <View style={styles.actionsGrid}>
            {QUICK_ACTIONS.map((action, i) => (
              <TouchableOpacity
                key={i}
                activeOpacity={0.8}
                style={[styles.actionBtn, { backgroundColor: action.color, borderColor: theme.border }]}
              >
                <Text style={styles.actionEmoji}>{action.icon}</Text>
                <Text style={[styles.actionLabel, { color: theme.text }]}>{action.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* ── Recent Memories ── */}
        <View style={styles.section}>
          <View style={styles.sectionRow}>
            <Typography variant="label" color={theme.textTertiary} style={styles.sectionLabel}>
              RECENT MEMORIES
            </Typography>
            <TouchableOpacity>
              <Typography variant="caption" color={theme.primary}>See all</Typography>
            </TouchableOpacity>
          </View>
          {RECENT_MEMORIES.map((m) => (
            <TouchableOpacity
              key={m.id}
              activeOpacity={0.8}
              style={[styles.memoryCard, { backgroundColor: m.color, borderColor: theme.border }]}
            >
              <Text style={styles.memoryEmoji}>{m.emoji}</Text>
              <View style={styles.memoryContent}>
                <Text style={[styles.memoryText, { color: theme.text }]} numberOfLines={2}>
                  {m.text}
                </Text>
                <Text style={[styles.memoryDate, { color: theme.textTertiary }]}>{m.date}</Text>
              </View>
              <Text style={[styles.chevron, { color: theme.textTertiary }]}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ── Anniversary Reminder ── */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={[styles.anniversaryBanner, { backgroundColor: theme.card, borderColor: theme.primary + '40' }]}
        >
          <Text style={styles.anniversaryEmoji}>🌷</Text>
          <View style={{ flex: 1 }}>
            <Text style={[styles.anniversaryTitle, { color: theme.text }]}>Upcoming Anniversary</Text>
            <Text style={[styles.anniversarySub, { color: theme.textSecondary }]}>
              Her birthday is in 12 days · Jul 3
            </Text>
          </View>
          <Text style={[styles.chevron, { color: theme.primary }]}>›</Text>
        </TouchableOpacity>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { paddingBottom: 20 },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingTop: 16,
    paddingBottom: 10,
  },
  greeting: { marginBottom: 2, letterSpacing: 0.5 },
  headerTitle: { fontSize: 26, fontWeight: '700', letterSpacing: -0.3 },
  notifBtn: {
    width: 42, height: 42, borderRadius: 21,
    alignItems: 'center', justifyContent: 'center', borderWidth: 1,
  },
  notifIcon: { fontSize: 18 },

  /* Hero Card */
  heroCard: {
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
  },
  heroTint: { position: 'absolute', inset: 0 },
  heroContent: { flexDirection: 'row', padding: 18, alignItems: 'flex-start' },
  heroAvatar: {
    width: 68, height: 68, borderRadius: 34,
    alignItems: 'center', justifyContent: 'center', borderWidth: 2, marginRight: 14,
  },
  heroAvatarEmoji: { fontSize: 32 },
  heroInfo: { flex: 1 },
  heroName: { fontSize: 22, fontWeight: '700', marginBottom: 2 },
  heroSub: { marginBottom: 10, fontSize: 12 },
  heroDates: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  dateChip: {
    fontSize: 11, paddingHorizontal: 10, paddingVertical: 4,
    borderRadius: 20, overflow: 'hidden', fontWeight: '500',
  },
  statsRow: {
    flexDirection: 'row', borderTopWidth: 1,
    paddingHorizontal: 18, paddingVertical: 14,
  },
  statItem: { flex: 1, alignItems: 'center' },
  statValue: { fontSize: 18, fontWeight: '700' },
  statLabel: { fontSize: 10, marginTop: 2, letterSpacing: 0.3 },

  /* Section */
  section: { marginTop: 24, paddingHorizontal: 16 },
  sectionLabel: { marginBottom: 12, letterSpacing: 1 },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },

  /* Ritual */
  ritualCard: {
    borderRadius: 16, padding: 16,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
  },
  ritualLeft: { flexDirection: 'row', alignItems: 'center' },
  ritualEmoji: { fontSize: 28 },
  ritualTitle: { color: '#FFF8EE', fontSize: 15, fontWeight: '600', marginBottom: 2 },
  ritualSub: { color: '#FFF8EEcc', fontSize: 12 },
  ritualArrow: { width: 28, height: 28, alignItems: 'center', justifyContent: 'center' },
  ritualArrowText: { color: '#FFF8EE', fontSize: 24, marginTop: -4 },

  /* Actions */
  actionsGrid: { flexDirection: 'row', gap: 10 },
  actionBtn: {
    flex: 1, borderRadius: 16, padding: 14,
    alignItems: 'center', borderWidth: 1,
  },
  actionEmoji: { fontSize: 24, marginBottom: 8 },
  actionLabel: { fontSize: 11, textAlign: 'center', fontWeight: '500', lineHeight: 15 },

  /* Memories */
  memoryCard: {
    borderRadius: 14, padding: 14, marginBottom: 10,
    flexDirection: 'row', alignItems: 'center', borderWidth: 0.5,
  },
  memoryEmoji: { fontSize: 24, marginRight: 12 },
  memoryContent: { flex: 1 },
  memoryText: { fontSize: 13, fontWeight: '500', lineHeight: 18 },
  memoryDate: { fontSize: 11, marginTop: 4 },
  chevron: { fontSize: 20, marginLeft: 8, marginTop: -2 },

  /* Anniversary */
  anniversaryBanner: {
    marginHorizontal: 16, marginTop: 24,
    borderRadius: 16, padding: 16, borderWidth: 1,
    flexDirection: 'row', alignItems: 'center', gap: 12,
  },
  anniversaryEmoji: { fontSize: 28 },
  anniversaryTitle: { fontSize: 14, fontWeight: '600', marginBottom: 2 },
  anniversarySub: { fontSize: 12 },
});

