import { View, Text, SectionList } from 'react-native';
import React from 'react';

export default function Menu(props) {
  return (
    <SectionList
      keyExtractor={(item, index) => item + index}
      sections={props.sections}
      renderItem={props.renderItem}
      renderSectionHeader={props.renderSectionHeader}
      ListFooterComponent={props.ListFooterComponent}
      ItemSeparatorComponent={props.ItemSeparatorComponent}
    />
  );
}
