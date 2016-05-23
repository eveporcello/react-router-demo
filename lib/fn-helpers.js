const compose =
    (...fns) =>
        (arg) =>
            fns.reduce((composed, f) => f(composed), arg)

const capatalize =
    string =>
        string.split(" ")
            .map(word => word[0].toUpperCase() + word.slice(1, word.length))
            .join(" ")

const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `http://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest()
    request.open('GET', api)
    request.onload = () => (request.status == 200) ? resolves(JSON.parse(request.response).results) : reject(Error(request.statusText))
    request.onerror = (err) => rejects(err)
    request.send();
});


module.exports = {compose, capatalize, getFakeMembers}