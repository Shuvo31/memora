import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, TextInput, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/types';
import { useTheme } from '../../theme/ThemeProvider';
import { Typography } from '../../components/Typography';
import { Button } from '../../components/Button';
import { DatePicker, DateValue, formatDateValue } from '../../components/DatePicker';
import { completeOnboarding } from '../../store/appSlice';

type NavigationProp = NativeStackNavigationProp<OnboardingStackParamList, 'AddPerson'>;

export const AddPersonScreen = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const [dob, setDob] = useState<DateValue | undefined>(undefined);
  const [dop, setDop] = useState<DateValue | undefined>(undefined);
  const [showDobPicker, setShowDobPicker] = useState(false);
  const [showDopPicker, setShowDopPicker] = useState(false);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Typography variant="label" color={theme.primary} style={styles.step}>STEP 2 OF 2</Typography>
          <Typography variant="h2" style={styles.title}>Tell us about her</Typography>
        </View>

        <View style={styles.form}>
          <View style={styles.photoUploadContainer}>
            <TouchableOpacity activeOpacity={0.7} style={[styles.photoUpload, { borderColor: theme.primary, backgroundColor: theme.card }]}>
              <Typography style={styles.plus}>+</Typography>
            </TouchableOpacity>
            <Typography variant="caption" style={styles.photoUploadText}>Add her photo</Typography>
          </View>

          <View style={[styles.inputGroup, { backgroundColor: '#fff', borderColor: theme.border }]}>
            <Typography variant="label" style={styles.inputLabel}>FULL NAME</Typography>
            <TextInput 
              style={[styles.input, { color: theme.text, borderBottomColor: theme.border }]} 
              placeholder="Full name"
              placeholderTextColor={theme.textTertiary}
              defaultValue="Maa"
            />
          </View>

          <View style={[styles.inputGroup, { backgroundColor: '#fff', borderColor: theme.border }]}>
            <Typography variant="label" style={styles.inputLabel}>NICKNAME</Typography>
            <TextInput 
              style={[styles.input, { color: theme.text, borderBottomColor: theme.border }]} 
              placeholder="Nickname"
              placeholderTextColor={theme.textTertiary}
              defaultValue="My mother"
            />
          </View>

          <View style={styles.row}>
            <TouchableOpacity 
              activeOpacity={0.7} 
              onPress={() => setShowDobPicker(true)}
              style={[styles.inputGroup, styles.halfInput, { backgroundColor: '#fff', borderColor: theme.border }]}
            >
              <Typography variant="label" style={styles.inputLabel}>DATE OF BIRTH</Typography>
              <Text style={[styles.input, { color: dob ? theme.text : theme.textTertiary }]}>
                {dob ? formatDateValue(dob) : 'Select date'}
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              activeOpacity={0.7} 
              onPress={() => setShowDopPicker(true)}
              style={[styles.inputGroup, styles.halfInput, { backgroundColor: '#fff', borderColor: theme.border }]}
            >
              <Typography variant="label" style={styles.inputLabel}>DATE OF PASSING</Typography>
              <Text style={[styles.input, { color: dop ? theme.text : theme.textTertiary }]}>
                {dop ? formatDateValue(dop) : 'Optional'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.inputGroup, { backgroundColor: '#fff', borderColor: theme.border }]}>
            <Typography variant="label" style={styles.inputLabel}>A FEW WORDS ABOUT HER</Typography>
            <TextInput 
              style={[styles.textArea, { color: theme.textSecondary }]} 
              multiline
              placeholder="Describe her..."
              placeholderTextColor={theme.textTertiary}
              defaultValue="She loved cooking, always smiled..."
            />
          </View>

          <Button 
            title="Create her memory vault" 
            onPress={() => dispatch(completeOnboarding())}
            style={styles.submitButton}
          />
        </View>
      </ScrollView>

      <DatePicker
        visible={showDobPicker}
        onClose={() => setShowDobPicker(false)}
        onSelect={setDob}
        title="DATE OF BIRTH"
        initialValue={dob}
      />
      <DatePicker
        visible={showDopPicker}
        onClose={() => setShowDopPicker(false)}
        onSelect={setDop}
        title="DATE OF PASSING"
        initialValue={dop}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
  },
  step: {
    marginBottom: 8,
  },
  title: {
    lineHeight: 28,
  },
  form: {
    paddingHorizontal: 24,
    gap: 12,
  },
  photoUploadContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  photoUpload: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  plus: {
    fontSize: 28,
    color: '#A08B75',
  },
  photoUploadText: {
    color: '#A08B75',
  },
  inputGroup: {
    borderRadius: 12,
    borderWidth: 0.5,
    padding: 12,
  },
  inputLabel: {
    marginBottom: 4,
  },
  input: {
    fontSize: 15,
    paddingVertical: 6,
    borderBottomWidth: 0.5,
  },
  textArea: {
    fontSize: 13,
    paddingVertical: 6,
    height: 60,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  halfInput: {
    flex: 1,
  },
  submitButton: {
    marginTop: 8,
  },
});
