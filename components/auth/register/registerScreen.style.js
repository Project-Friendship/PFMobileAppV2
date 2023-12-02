import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../enum";

const styles = StyleSheet.create({
    
    container: {
		width: "100%",
		display: "flex",
		flexWrap: 'wrap',
		alignContent: 'space-around'
	},

    inputBoxLine: {
        display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
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
    inputLabel: {
		fontFamily: FONT.bold,
		color: COLORS.gray,
		fontSize: SIZES.medium,
	},
	passwordInfoContainer: {
		marginBottom: '1em',
		marginTop: '-1em',
	},
	passwordInfoHeader: {
		fontFamily: FONT.light,
		marginBottom: '0.5em',
	},
	passwordInfo: {
		fontFamily: FONT.light,
		color: COLORS.gray,
	}
})

export default styles;