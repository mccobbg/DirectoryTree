import { useMemo, useRef } from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const Directory = ({ directory }) => {
  const directoryIndex = useRef(0);
  const listItems = (items, list, level) => {
    items.map((item) => {
      return listItem(item, list, level);
    });
  };

  const renderDashes = (num) => {
    return num > 0 ? new Array(num + 1).join("-") + " " : "";
  };

  const listItem = (item, list, level) => {
    if (item.type === "file") {
      const string = renderDashes(level) + item.name + " (" + item.size + " B)";
      list.push(string);
    } else if (item.type === "dir") {
      const string = renderDashes(level) + "./" + item.name + "/";
      list.push(string);
      listItems(item.items, list, level + 1);
    }
  };

  const directoryList = useMemo(() => {
    const list = [];
    directoryIndex.current = 0;
    if (!!directory) {
      listItem(directory, list, 0);
    }
    return list;
  }, [directory]);

  console.log("Directory list" + directoryList);

  return (
    <FlatList
      style={styles.dirView}
      data={directoryList}
      renderItem={({ item }) => <Text style={styles.introText}>{item}</Text>}
      keyExtractor={() => ++directoryIndex.current}
    />
  );
};

const styles = StyleSheet.create({
  introText: {
    fontSize: 18,
    color: "black",
    marginLeft: 10,
    marginBotton: 2,
  },
  dirView: {
    margin: 6,
  },
});

export default Directory;
