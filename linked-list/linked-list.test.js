const LinkedList = require('./linked-list');

describe('LinkedList', () => {
  it('should append node to linked list', () => {
    const linkedList = LinkedList();

    //expect(linkedList.head).toEqual({ next: linkedList.tail, value: null });
    expect(linkedList.head).toEqual({ next: null, value: null });
    // or
    // expect(linkedList.head.value).toBeNull();
    // expect(linkedList.head.next).toBeNull();

    expect(linkedList.tail).toEqual({ next: null, value: null });
    // or
    // expect(linkedList.tail.value).toBeNull();
    // expect(linkedList.tail.next).toBeNull();

    linkedList.append(1);
    linkedList.add(2);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next).not.toBeNull();

    expect(linkedList.tail.value).toBe(2);
    expect(linkedList.tail.next).toBeNull();
  });

  it('should have a toString method that prints all the values', () => {
    const linkedList = LinkedList();
    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(12);
    linkedList.append(99);

    expect(linkedList.toString()).toBe('(1,1,12,99)');
  });
});
