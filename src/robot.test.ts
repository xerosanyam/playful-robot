import { describe, expect, it, } from "vitest"
import { sort } from "./robot"

describe('Robots', () => {
	it('sort', () => {
		expect(sort(1, 1, 1, 1)).toBe('STANDARD')
	})
})