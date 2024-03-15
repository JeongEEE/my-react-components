export function validateEmail(email: string) {
	const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
	return regex.test(String(email).toLowerCase());
}

export function checkStringOnlyBlankPattern(str: string) {
	// 공백만 입력한 경우 체크
	const blank_pattern = /^\s+|\s+$/g;
	if(str.replace(blank_pattern, '') == "" ) {
		return true; // 공백만 입력
	} else {
		return false;
	}
}
export function checkStringBlankPattern(str: string) {
	// 문자열에 공백이 있는 경우
	const blank_pattern = /[\s]/g;
	return blank_pattern.test(str);  // true, false로 반환
}
export function checkStringSpecialPattern(str: string) {
	// 특수문자가 있는 경우 체크
	const special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
	return special_pattern.test(str);  // true, false로 반환
}
export function checkStringBlankWithSpecialPattern(str: string) {
	// 문자열에 공백 또는 특수문자가 같이 있는 경우
	if(str.search(/\W|\s/g) > -1) {
		return true;
	} else {
		return false;
	}
}
export function checkNumberAndString(str: string) {
	// 문자와 숫자가 아닌경우
	const regex = /[^a-zA-Z0-9가-힣ㄱ-ㅎ]/g;
	return regex.test(str);  // true, false로 반환
}