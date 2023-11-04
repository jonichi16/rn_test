import {StyleSheet, FlatList, View, Text} from 'react-native';
import React from 'react';
import {Todo} from '../models/Todo';
import Row from './Row';

interface TableProps {
  todos: Todo[];
  updateStatus: (id: string) => void;
}

const Table = ({todos, updateStatus}: TableProps) => {
  return (
    <View style={styles.table}>
      <Row col1={'Completed?'} col2={'Title'} isLast={todos.length === 0} />
      {todos.length === 0 ? (
        <Text style={styles.empty}>Nothing to do</Text>
      ) : (
        <FlatList
          data={todos}
          renderItem={({item, index}) => (
            <Row
              id={item.id}
              isComplete={item.isComplete}
              title={item.title}
              isLast={index + 1 === todos.length ? true : false}
              updateStatus={updateStatus}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  table: {
    flex: 1,
    width: '100%',
    marginTop: 10,
  },
  empty: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 72,
  },
});
