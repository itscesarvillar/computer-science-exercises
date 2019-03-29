function LinkedList() {
	let head = null;
	let tail = null;

	function append(value) {
		const newListItem = new ListItemLinkedList(value);
		if (head === null) {
			// (!head)
			head = newListItem;
			tail = head;
			//this.head = head;
			//this.tail = tail;
		} else {
			tail.next = newListItem;

			tail = newListItem;
		}
	}

	return {
		head,
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
