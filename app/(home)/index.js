import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";

const index = () => {

  return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", padding: "4px", margin: "4px"}}>
        <ActivityIndicator size="large" color="red" />
        <Text style={{color: "red"}}>Future is goin on...</Text>
      </View>
    );
};

export default index;

const styles = StyleSheet.create({});
