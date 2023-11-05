import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../../common/components/buttons/Button';
import {Spacing, Typography} from '../../common/styles';

type MissingPageProps = {
  page: string;
};

const MissingPage = ({page}: MissingPageProps) => {
  const navigation = useNavigation<{navigate: (routeName: string) => void}>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{`No ${page} Found!`}</Text>
      <Text style={styles.guide}>
        {`Please click button below to set your ${page.toLowerCase()}`}
      </Text>
      <Button
        title={`Go to ${page} Page`}
        style={styles.button}
        handlePress={() => navigation.navigate(page)}
      />
    </View>
  );
};

export default MissingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.spacing.md,
    gap: Spacing.spacing.md,
  },
  header: {
    ...Typography.header.xl,
  },
  guide: {
    ...Typography.subHeader.md,
  },
  button: {
    width: '50%',
  },
});
