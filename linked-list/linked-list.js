function LinkedList() {
  const head = new ListItemLinkedList(null);
  const tail = new ListItemLinkedList(null);
  let fakeTail;

  function append(value) {
    const newListItem = new ListItemLinkedList(value);

    if (head.value === null) {
      // head = newListItem
      head.value = newListItem.value;
      head.next = newListItem.next;

      // tail = head
      tail.value = newListItem.value;
      tail.next = newListItem.next;

      fakeTail = tail;
    } else {
      if (head.next === null) {
        // copy values into head if empty
        head.next = newListItem;
      }

      // magic goes here, that's link things
      fakeTail.next = newListItem;
      fakeTail = newListItem;
      //end magic

      //I need to copy the result of the spell into "old" tail
      // (the one who hasn't changed since the beginning, but not the content)
      tail.value = fakeTail.value; //or newListItem.value
      tail.next = null; //or newListItem.next or fakeTail.next
    }
  }

  /**
   * Since I cannot write 'head =' or 'tail =' (that is changing the reference)
   * I need to mutate head values or tail values,
   * so that values are updated but the reference still remains
   */

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
