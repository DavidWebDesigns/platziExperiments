const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            console.log('Something is happening!');
            resolve('that something happened!');
        } else {
            reject('Whoops!');
        }
    });
};
// somethingWillHappen()
//     .then (response => console.log(response))
//     .catch(err => console.error(err));
const somethingElseHappened = () => {
    return new Promise ((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Something else happened after 2 secs');
            }, 2000 )
        } else {
            let error = new Error ('omg what!?');
            reject(error);
        }
    });
}
// somethingElseHappened()
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
Promise.all([somethingWillHappen(), somethingElseHappened()])
    .then(results => {
        console.log( results );
    })
    .catch(err => {
        console.error(err);
    });