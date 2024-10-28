import {Pressable, Text, View, Image, StyleSheet, Platform} from "react-native";

function MealItem({title, imageUrl, complexity, affordability, duration}){
	return (
		<View style={styles.mealItem}>
			<Pressable android_ripple={{color: '#cccccc'}}
			           style={({pressed}) => pressed ? styles.buttonPressed : null}>
				<View style={styles.innerContainer}>
					<Image source={{uri: imageUrl}} style={styles.image} />
					<View>
						<Text style={styles.title}>{title}</Text>
					</View>
					<View style={styles.details}>
						<Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
						<Text style={styles.detailItem}>{duration}m</Text>
						<Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
					</View>
				</View>
			</Pressable>
		</View>
	)
}

export default MealItem

const styles = StyleSheet.create({
	innerContainer: {
		borderRadius: 8,
		overflow: 'hidden',
	},
	buttonPressed: {
		opacity: 0.75
	},
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: Platform.OS === 'android'? 'hidden' : 'visible',
		backgroundColor: 'white',
		elevation: 4,
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width:0, height:2},
		shadowRadius: 8,
	},
	image: {
		width: '100%',
		height: 200,
	},
	title: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 18,
		marginBottom: 8,
	},
	details: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 8,
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12
	}
})