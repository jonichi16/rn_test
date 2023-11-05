import {StyleSheet, FlatList, View, Text} from 'react-native';
import React from 'react';
import {Todo} from '../models/Todo';
import Card from './Card';
import {Spacing, Typography} from '../../common/styles';

interface TodoListProps {
  todos: Todo[];
  updateStatus: (id: string) => void;
}

const TodoList = ({todos, updateStatus}: TodoListProps) => {
  return (
    <>
      {todos.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.empty}>Nothing to do</Text>
        </View>
      ) : (
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <Card todo={item} updateStatus={updateStatus} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
    marginTop: Spacing.spacing.lg,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    justifyContent: 'center',
    textAlign: 'center',
    ...Typography.header.lg,
  },
});
