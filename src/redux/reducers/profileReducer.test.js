import profileReducer, { addNewPost, deletePost } from "./profileReducer";

const state = {
    posts: [
        {
            id: 1,
            text: 'YO, YO, YO, one four eight three to the three to the six the nine. Present the ABQ. What up BEAATCH',
        },
        {
            id: 2,
            text: 'SIUUUUUUU',
        },
        {
            id: 3,
            text: 'Tommow in the central park at 12:00 guys',
        },
    ]
};

it('Length of posts should be incrementet', () => {

    const action = addNewPost('super.sus');
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});


it('Message of new posts should be correct', () => {

    const action = addNewPost('super.sus');
    let newState = profileReducer(state, action);

    expect(newState.posts[3].text).toBe('super.sus');
});

it('after deleting should be deleted', () => {

    const action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});

it('should\'t be deleted, if id is incorrect', () => {

    const action = deletePost(100);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});