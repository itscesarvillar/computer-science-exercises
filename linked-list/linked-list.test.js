const LinkedList = require('./linked-list');

describe('LinkedList', () => {
	it('should append node to linked list', () => {
		const linkedList = new LinkedList();

		expect(linkedList.head).toBeNull();
		expect(linkedList.tail).toBeNull();

		linkedList.append(1);
		linkedList.add(2);

		expect(linkedList.head.value).toBe(1);

		expect(linkedList.tail.value).toBe(2);
		expect(linkedList.tail.next).toBeNull();
	});
});
