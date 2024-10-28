import { useLayoutEffect } from "react";
import {View, StyleSheet, FlatList} from "react-native";
import {MEALS, CATEGORIES} from "../data/dummy-data";
import MealItem from "../components/MealItem";


function MealsOverviewScreen({route, navigation }) {
	const categoryId = route.params.categoryId;

	const displayMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(categoryId) >= 0;
	});

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

		navigation.setOptions({
			title: categoryTitle
		});

	}, [categoryId, navigation]);

	function renderMealItem(itemData) {
		const item = itemData.item
		const mealItemProps = {
			title: item.title,
			imageUrl: item.imageUrl,
			affordability: item.affordability,
			complexity: item.complexity,
			duration: item.duration,
		}
		return <MealItem {...mealItemProps} />;
	}

	return <View style={styles.container}>
		<FlatList data={displayMeals}
		          keyExtractor={(item) => item.id}
		          renderItem={renderMealItem}/>
	</View>
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16
	}
})