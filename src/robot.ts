export function sort(width: number, height: number, length: number, mass: number) {

	const isBulky = (width: number, height: number, length: number) => {
		if (width >= 150 || height >= 150 || length >= 150) return true
		const volume = width * height * length
		if (volume >= 1_000_000) return true
		return false
	}
	const isHeavy = (mass: number) => {
		return mass >= 20
	}

	const itemIsBulky = isBulky(width, height, length)
	const itemIsHeavy = isHeavy(mass)
	if (itemIsBulky) {
		if (itemIsHeavy) {
			return 'REJECTED'
		} else {
			return 'SPECIAL'
		}
	}
	return 'STANDARD'
}
