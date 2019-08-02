const avialableLanguages = ["en", "ge", "it"];

const language = (state = "en", action) => {
	switch(action.type) {
		case "SET_LANGUAGE" : return avialableLanguages.includes(action.language) ? action.language : "en";
		default: return state
	}
}

export default language