import { Course } from '@/types/course';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { COLORS } from '../constants/colors';
import ThemedText from './themed-text';
import ThemedView from './themed-view';

export default function CourseCard({ course }: { course: Course }) {
  const scheme = useColorScheme() ?? 'light';
  const colors = COLORS[scheme];

  return (
    <ThemedView style={[styles.card, { backgroundColor: colors.background.secondary, borderColor: colors.background.border }]}>
      <View style={styles.topRow}>
        <View style={[styles.avatar, { backgroundColor: colors.background.accentSoft }]}>
          <MaterialIcons name="person" size={19} color={colors.background.accent} />
        </View>
        <View style={styles.rider}>
          <ThemedText style={styles.title}>{course?.name ?? 'Alice M.'}</ThemedText>
          <ThemedText style={[styles.meta, { color: colors.text.gray }]}>Course en cours</ThemedText>
        </View>
        <View style={styles.fare}>
          <ThemedText style={[styles.fareLabel, { color: colors.text.gray }]}>EST.</ThemedText>
          <ThemedText style={styles.fareValue}>$45.00</ThemedText>
        </View>
      </View>

      <View style={styles.route}>
        <View style={styles.routeRail}>
          <View style={[styles.dot, { backgroundColor: colors.background.accent }]} />
          <View style={[styles.line, { backgroundColor: colors.background.border }]} />
          <View style={[styles.dot, { backgroundColor: colors.text.primary }]} />
        </View>
        <View style={styles.locations}>
          <View><ThemedText style={[styles.label, { color: colors.text.gray }]}>DÉPART</ThemedText><ThemedText style={styles.location}>Location</ThemedText></View>
          <View><ThemedText style={[styles.label, { color: colors.text.gray }]}>ARRIVÉE · 12 MIN</ThemedText><ThemedText style={styles.location}>Heathrow Terminal 5</ThemedText></View>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 20, borderWidth: 1, padding: 16, gap: 16 },
  topRow: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 42, height: 42, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  rider: { flex: 1, marginLeft: 11, gap: 2 },
  title: { fontSize: 17, fontWeight: '800' },
  meta: { fontSize: 12 },
  fare: { alignItems: 'flex-end', gap: 2 },
  fareLabel: { fontSize: 9, letterSpacing: 1, fontWeight: '800' },
  fareValue: { fontSize: 18, fontWeight: '800' },
  route: { flexDirection: 'row', gap: 12 },
  routeRail: { width: 14, alignItems: 'center', paddingTop: 5 },
  dot: { width: 7, height: 7, borderRadius: 99 },
  line: { width: 1, height: 30, marginVertical: 3 },
  locations: { flex: 1, gap: 12 },
  label: { fontSize: 9, letterSpacing: 1, fontWeight: '800' },
  location: { fontSize: 14, fontWeight: '600', marginTop: 2 },
});
