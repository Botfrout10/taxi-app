import { Pause } from '@/types/pause';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { SPACING } from '../constants/spacing';
import ThemedText from './themed-text';
import ThemedView from './themed-view';

function formatDuration(ms?: number) {
  if (!ms || ms < 0) return '0:00';
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

export default function PauseCard({ pause }: { pause: Pause }) {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.cardWrap}>
        <ThemedView variant="secondary" style={styles.card}>
          <ThemedView variant="secondary" style={styles.content}>
            <ThemedView variant="secondary" style={styles.rowBetween}>
              <ThemedView variant="secondary" style={{ flex: 1 }}>
                <ThemedView variant="secondary" style={styles.rowCenter}>
                  <ThemedText variant="secondary" style={styles.title}>Pause</ThemedText>
                </ThemedView>
                <ThemedView variant="secondary" style={{ marginTop: SPACING.xs }}>
                  <ThemedText variant="secondary" style={styles.meta}>ID</ThemedText>
                  <ThemedText variant="secondary" style={styles.location}>#{pause?.id ?? '-'}</ThemedText>
                </ThemedView>
              </ThemedView>

              <ThemedView variant="secondary" style={styles.rightCol}>
                <ThemedText variant="secondary" style={[styles.meta, { textAlign: 'right' }]}>Time</ThemedText>
                <ThemedView variant="secondary" style={styles.timeRow}>
                  <ThemedText variant="secondary" style={styles.fare}>{formatDuration(pause?.time)}</ThemedText>
                  <Ionicons name='time' size={24} style={styles.timerIcon} />
                </ThemedView>
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: SPACING.md,
  },
  cardWrap: {
    // borderRadius: 16,
    // overflow: 'hidden',
  },
  card: {
    borderRadius: 16,
    padding: SPACING.md,
  },
  content: {
    gap: SPACING.sm,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: SPACING.md,
  } satisfies ViewStyle,
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  } satisfies ViewStyle,
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  meta: {
    fontSize: 12,
    opacity: 0.7,
  },
  location: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 2,
  },
  rightCol: {
    minWidth: 110,
    alignItems: 'flex-end',
    gap: SPACING.xs,
  } satisfies ViewStyle,
  timeRow: {
    flexDirection: 'row',
    justifyContent : 'flex-start',
    alignItems: 'center',
    width : "100%",
    gap : SPACING.sm
  } satisfies ViewStyle,
  timerIcon: {
    marginRight: 2,
  },
  fare: {
    fontSize: 20,
    fontWeight: '700',
  },
});
