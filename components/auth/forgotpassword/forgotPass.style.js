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
	formContainer: { 
		display: "flex",
		minWidth: "500px",
		justifyContent: "space-around",
		'@media (min-width: 500px)': {
            backgroundColor: 'red',
        },
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: COLORS.secondary,
	},
	buttonLabel:{
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: COLORS.lightWhite,
	},
	intputLabel: {
		fontWeight: "bold",
		color: COLORS.gray,
		fontSize: SIZES.medium,
	},
	input: {
		height: 40,
		width: '100%',
		marginBottom: 5,
		borderWidth: 1,
		borderColor: COLORS.gray,
		padding: SIZES.medium,
	},

	actionLinks:{
		display: "flex",
		paddingTop: SIZES.large,
		marginBottom: SIZES.small,
		flex: 1
	},

	errorMessage:{
		lineHeight: SIZES.large * 2,
		color: COLORS.error,
		fontWeight: 'bold',
	}

})

export default styles;