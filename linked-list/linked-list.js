function LinkedList() {
	const head = new ListItemLinkedList(null);
	const tail = new ListItemLinkedList(null);

	function append(value) {
		const newListItem = new ListItemLinkedList(value);
		if (head.value === null) {
			updateReferences(head, newListItem); // head = newListItem

			updateReferences(tail, head); // tail = head
		} else {
			tail.next = newListItem;
			updateReferences(tail, newListItem); // tail = newListItem
		}
	}

	/**
	 * Since I cannot write 'head =' or 'tail =' (that is changing the reference)
	 * I need to mutate head values or tail values,
	 * so that values are updated but the reference still remains
	 *
	 * @param {head | tail } ref
	 * @param { { next, value }} listItem
	 */
	function updateReferences(ref, listItem) {
		ref.value = listItem.value;
		ref.next = listItem.next;
	}

	return {
		head, // This is the unique reference that
		// the user of new LinkedList() has so it cannot change,
		// we just need to update the inner values!
		tail,
		append,
		add: append
	};
}

function ListItemLinkedList(value) {
	// value: !null, next: ListItemLinkedList
	return {
		value,
		next: null
	};
}

module.exports = LinkedList;
