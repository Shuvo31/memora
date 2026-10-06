import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
  FlatList,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Typography } from './Typography';
import { Button } from './Button';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: 120 }, (_, i) => currentYear - i);

export type DateValue = { month: number; day: number; year: number };

export const formatDateValue = (d?: DateValue): string => {
  if (!d) return '';
  return `${MONTHS[d.month].slice(0, 3)} ${d.day}, ${d.year}`;
};

interface DatePickerProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (date: DateValue) => void;
  title?: string;
  initialValue?: DateValue;
}

export const DatePicker = ({
  visible,
  onClose,
  onSelect,
  title = 'SELECT DATE',
  initialValue,
}: DatePickerProps) => {
  const { theme } = useTheme();

  const [month, setMonth] = useState(initialValue?.month ?? 0);
  const [day, setDay] = useState(initialValue?.day ?? 1);
  const [year, setYear] = useState(initialValue?.year ?? currentYear - 30);

  const handleConfirm = () => {
    onSelect({ month, day, year });
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose}>
        <TouchableOpacity activeOpacity={1} style={[styles.sheet, { backgroundColor: theme.card }]}>
          <View style={[styles.handle, { backgroundColor: theme.border }]} />
          <Typography variant="label" color={theme.primary} style={styles.title}>
            {title}
          </Typography>

          <View style={styles.columnsRow}>
            {/* Month */}
            <View style={styles.column}>
              <Typography variant="caption" style={[styles.colLabel, { color: theme.textTertiary }]}>
                MONTH
              </Typography>
              <FlatList
                data={MONTHS}
                keyExtractor={(_, i) => `m-${i}`}
                showsVerticalScrollIndicator={false}
                style={styles.list}
                renderItem={({ item, index }) => {
                  const selected = month === index;
                  return (
                    <TouchableOpacity
                      onPress={() => setMonth(index)}
                      style={[
                        styles.item,
                        selected && { backgroundColor: theme.primary + '25', borderRadius: 8 },
                      ]}
                    >
                      <Text style={[styles.itemText, { color: selected ? theme.primary : theme.textSecondary }]}>
                        {item.slice(0, 3)}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>

            <View style={[styles.divider, { backgroundColor: theme.border }]} />

            {/* Day */}
            <View style={[styles.column, { flex: 0.6 }]}>
              <Typography variant="caption" style={[styles.colLabel, { color: theme.textTertiary }]}>
                DAY
              </Typography>
              <FlatList
                data={DAYS}
                keyExtractor={(_, i) => `d-${i}`}
                showsVerticalScrollIndicator={false}
                style={styles.list}
                renderItem={({ item }) => {
                  const selected = day === item;
                  return (
                    <TouchableOpacity
                      onPress={() => setDay(item)}
                      style={[
                        styles.item,
                        selected && { backgroundColor: theme.primary + '25', borderRadius: 8 },
                      ]}
                    >
                      <Text style={[styles.itemText, { color: selected ? theme.primary : theme.textSecondary }]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>

            <View style={[styles.divider, { backgroundColor: theme.border }]} />

            {/* Year */}
            <View style={styles.column}>
              <Typography variant="caption" style={[styles.colLabel, { color: theme.textTertiary }]}>
                YEAR
              </Typography>
              <FlatList
                data={YEARS}
                keyExtractor={(_, i) => `y-${i}`}
                showsVerticalScrollIndicator={false}
                style={styles.list}
                renderItem={({ item }) => {
                  const selected = year === item;
                  return (
                    <TouchableOpacity
                      onPress={() => setYear(item)}
                      style={[
                        styles.item,
                        selected && { backgroundColor: theme.primary + '25', borderRadius: 8 },
                      ]}
                    >
                      <Text style={[styles.itemText, { color: selected ? theme.primary : theme.textSecondary }]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>

          <Button title="Confirm Date" onPress={handleConfirm} style={styles.confirmBtn} />
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  sheet: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: 40,
  },
  handle: {
    width: 36,
    height: 4,
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1.5,
  },
  columnsRow: {
    flexDirection: 'row',
    height: 220,
    alignItems: 'stretch',
  },
  column: {
    flex: 1,
  },
  divider: {
    width: 1,
    marginHorizontal: 8,
    opacity: 0.3,
  },
  colLabel: {
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 0.8,
  },
  list: {
    flex: 1,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 14,
    fontWeight: '500',
  },
  confirmBtn: {
    marginTop: 20,
  },
});
