import { Frais } from '@/types/frais';
import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { SPACING } from '../constants/spacing';
import ThemedText from './themed-text';
import ThemedView from './themed-view';

export default function FraisCard({ frais }: { frais: Frais }) {
  const scheme = useColorScheme() ?? 'light';
  const isDark = scheme === 'dark';
  const cardShadow = isDark ? {} : styles.shadow;

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.cardWrap}>
        <ThemedView variant="secondary" style={[styles.card, cardShadow]}>          
          <ThemedView variant="secondary" style={styles.content}>
            <ThemedView variant="secondary" style={styles.rowBetween}>
              <ThemedView variant="secondary" style={{ flex: 1 }}>
                <ThemedView variant="secondary" style={styles.rowCenter}>
                  <ThemedText variant="secondary" style={styles.title}>Expense</ThemedText>
                </ThemedView>

                <ThemedView variant="secondary" style={{ marginTop: SPACING.xs }}>
                  <ThemedText variant="secondary" style={styles.meta}>Payment</ThemedText>
                  <ThemedText variant="secondary" style={styles.location}>{frais?.payement ?? '-'}</ThemedText>
                </ThemedView>
              </ThemedView>

              <ThemedView variant="secondary" style={styles.rightCol}>
                <ThemedText variant="secondary" style={[styles.meta, { textAlign: 'right' }]}>Amount</ThemedText>
                <ThemedText variant="secondary" style={styles.fare}>${(frais?.price ?? 0).toFixed(2)}</ThemedText>
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
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
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
    minWidth: 100,
    alignItems: 'flex-end',
  },
  fare: {
    fontSize: 20,
    fontWeight: '700',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
});
