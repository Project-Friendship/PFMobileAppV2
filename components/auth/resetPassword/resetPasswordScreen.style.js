import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../enum";

const styles = StyleSheet.create({
    
    container: {
		width: "100%",
		display: "flex",
		flexWrap: 'wrap',
		alignContent: 'space-around'
	},

	logoContainer: {
		display: "flex",
		alignSelf: "center",
		maxWidth: "100%"
	},

	errorMessage:{
		color: COLORS.error,
		fontFamily: FONT.bold,
		fontSize: FONT.medium,
		marginTop: "-18px",
		marginBottom: "20px"
	},
})

export default styles;