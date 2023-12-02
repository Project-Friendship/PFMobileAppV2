import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../enum";

const styles = StyleSheet.create({
    
	formContainer: { 
		display: "flex",
		minWidth: "500px",
		justifyContent: "space-around",
		'@media (min-width: 500px)': {
            backgroundColor: 'red',
        },
		marginBottom: "20px",
	},
    formHeader: {
        textAlign: 'center',
        fontSize: SIZES.xLarge,
        fontFamily: FONT.bold,
        paddingTop: 30,
        paddingBottom: 20
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
		fontSize: SIZES.medium,
		lineHeight: 21,
		fontFamily: FONT.bold,
		letterSpacing: 0.25,
		color: COLORS.lightWhite,
	},
	inputLabel: {
		fontFamily: FONT.bold,
		color: COLORS.gray,
		fontSize: SIZES.medium,
	},

	checkboxLabel: {
		fontFamily: FONT.bold,
		color: COLORS.gray,
		fontSize: SIZES.medium,
		marginBottom: "0.5em"
	},

	input: {
		width: '100%',
		borderWidth: 1,
		borderColor: COLORS.gray,
		flexDirection: 'row',
	},
	select: {
		width: '100%',
		flexDirection: 'row',
	},

	picker: {
		fontFamily: FONT.light,
		fontSize: SIZES.medium,
		width: "100%",
		height: "50px",
	},

	inputBox: {
		padding: SIZES.small,
		fontFamily: FONT.regular,
		fontSize: SIZES.medium,
		width: '100%',
		height: 50,
	},

	otherInputBox: {
		fontFamily: FONT.light,
		fontSize: SIZES.medium,
		width: "100px",
		minWidth: "100px",
		paddingLeft: '5px',
		marginLeft: '5px',
		borderWidth: 1,
    	borderColor: COLORS.gray,
	},

	inputElement: {
		marginBottom: 25,
	},

	checkboxes: {
		height: "2.7em",
		display: 'flex',
		flexWrap: 'wrap',
		gap: "5px",
	},

	checkbox: {
		display: 'flex',
		flexDirection: 'row',
	},

	checkboxText: {
		fontFamily: FONT.light,
		fontSize: SIZES.medium,
		marginLeft: "5px",
	},

	eyeButton: {
		marginLeft: '-8%',
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'row',
	},
})

export default styles;