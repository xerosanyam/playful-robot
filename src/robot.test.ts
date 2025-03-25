import { describe, expect, it, } from "vitest"
import { sort } from "./robot"

describe('Package sorting function', () => {
	const testCases = [
		{ input: [100, 100, 100, 10], expected: "SPECIAL" },
		{ input: [200, 50, 50, 10], expected: "SPECIAL" },
		{ input: [100, 100, 100, 25], expected: "REJECTED" },
		{ input: [200, 200, 200, 30], expected: "REJECTED" },
		{ input: [150, 100, 100, 10], expected: "SPECIAL" },
		{ input: [100, 100, 100, 20], expected: "REJECTED" },
		{ input: [150, 150, 150, 20], expected: "REJECTED" },
	];

	testCases.forEach(({ input, expected }) => {
		it(`should return ${expected} for input ${JSON.stringify(input)}`, () => {
			expect(sort(...input)).toBe(expected);
		});
	});
})