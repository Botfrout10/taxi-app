import { Course } from '@/types/course';
import React from 'react';
import { StyleSheet, useColorScheme, ViewStyle } from 'react-native';
import { SPACING } from '../constants/spacing';
import ThemedText from "./themed-text";
import ThemedView from "./themed-view";

export default function CourseCard({ course }: { course: Course }) {
  const scheme = useColorScheme() ?? 'light';
  const isDark = scheme === 'dark';
  const cardShadow = isDark ? {} : styles.shadow;

  return (
    <ThemedView style={styles.container}>

      {/* Card */}
      <ThemedView style={styles.cardWrap}>
        <ThemedView variant='secondary' style={[styles.card, cardShadow]}>


          {/* Card Content */}
          <ThemedView variant='secondary' style={styles.content}>
            <ThemedView variant='secondary' style={styles.rowBetween}>
              {/* Left: Rider + location */}
              <ThemedView variant='secondary' style={{ flex: 1 }}>
                <ThemedView variant='secondary' style={styles.rowCenter}>
                  <ThemedText variant='secondary' style={[styles.title]}>{course?.name ?? 'Alice M.'}</ThemedText>
                </ThemedView>

                <ThemedView variant='secondary' style={styles.rowLocation}>
                  {/* Dot-line stack */}
                  <ThemedView variant='secondary' style={styles.dotStack}>
                    <ThemedView style={[styles.smallDot,]} />
                    <ThemedView style={[styles.vertLine,]} />
                    <ThemedView style={[styles.smallDot,]} />
                  </ThemedView>

                  <ThemedView variant='secondary' style={styles.locThemedTextCol}>
                    <ThemedText variant='secondary' style={[styles.meta,]}>From : Location</ThemedText>
                    <ThemedText variant='secondary' style={[styles.timerText]}>12 min</ThemedText>
                    <ThemedText variant='secondary' style={[styles.location]}>To : Heathrow Terminal 5</ThemedText>
                  </ThemedView>
                </ThemedView>
              </ThemedView>

              {/* Right: Fare */}
              <ThemedView variant='secondary' style={styles.rightCol}>
                <ThemedText variant='secondary' style={[styles.meta, { textAlign: 'right' }]}>Est. Fare</ThemedText>
                <ThemedText variant='secondary' style={[styles.fare,]}>$45.00</ThemedText>
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
  },
  cardWrap: {
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  timerText: {
    fontSize: 12,
    fontWeight: '700',
  },
  content: {
    padding: 16,
    paddingTop: 10,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginBottom: 4,
  } satisfies ViewStyle,
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  rowLocation: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: SPACING.sm,
  } satisfies ViewStyle,
  dotStack: {
    width: 16,
    alignItems: 'center',
  },
  smallDot: {
    width: 6, height: 6, borderRadius: 9999,
  },
  vertLine: {
    width: 2, height: 40, marginVertical: 2, borderRadius: 1,
  },
  locThemedTextCol: {
    flexDirection: 'column',
    gap: SPACING.xs,
  } satisfies ViewStyle,
  meta: {
    fontSize: 12,
  },
  location: {
    fontSize: 14,
    fontWeight: '600',
  },
  rightCol: {
    alignItems: 'flex-end',
    gap: SPACING.sm,
  } satisfies ViewStyle,
  fare: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'monospace',
  },
});