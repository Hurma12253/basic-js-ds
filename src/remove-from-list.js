const { NotImplementedError } = require('../extensions/index.js')

const { ListNode } = require('../extensions/list-node.js')

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
	const nums = listToArray(l).filter((number) => number !== k)
	const result = arrayToList(nums)

	return result
}

function listToArray(list) {
	const result = []

	while (list) {
		result.push(list.value)

		list = list.next
	}

	return result
}

function arrayToList(array) {
	let _head
	let _tail

	array.forEach((num) => {
		const node = new ListNode(num)

		if (!_head) {
			_head = node
			_tail = node
		} else {
      _tail.next = node
			_tail = node
		}
	})

	return _head
}

module.exports = {
	removeKFromList,
}
