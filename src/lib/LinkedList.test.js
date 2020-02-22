const { loadFeature, defineFeature } = require('jest-cucumber');
const { LinkedList } = require('./LinkedList.js');

const feature = loadFeature('./LinkedList.feature', { loadRelativePath: true, errors: true });

defineFeature(feature, test => {
    test('Instantiating a list', ({ given, when, then, and }) => {

        let list;

        given('no instance', () => {
            expect(list).toBeUndefined;
        });

        when('instantiating a new Singly Linked List', () => {
            list = new LinkedList();
        });

        then('initial head must be null', () => {
            expect(list.head).toBe(null);
        });
        and('initial tail must be null', () => {
            expect(list.tail).toBe(null);
        });
        and('length must be 0', () => {
            expect(list.length).toBe(0);
        });
    });

    test('Pushing a value on a empty list', ({ given, when, then, and }) => {

        let list;

        given(/^an Empty Singly Linked List with (.*) nodes$/, (arg0) => {
            list = new LinkedList();

            expect(list.length).toBe(Number.parseInt(arg0));
        });

        when(/^pushing (.*) as node value$/, (arg0) => {
            list.push(arg0);
        });

        then(/^head value becomes (.*)$/, (arg0) => {
            expect(list.head.value).toBe(arg0);
        });
        and(/^tail value becomes (.*)$/, (arg0) => {
            expect(list.tail.value).toBe(arg0);
        });
        and(/^the list length becomes (.*)$/, (arg0) => {
            expect(list.length).toBe(Number.parseInt(arg0));
        });
    });
});