import {MEALS} from "../data/dummy-data";
import {Text, View, StyleSheet} from "react-native";

function MealsOverviewScreen({ route }) {
	const categoryId = route.params.categoryId;

	return <View style={styles.container}>
		<Text> Meals Overview Screen - {categoryId}</Text>
	</View>
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16
	}
})