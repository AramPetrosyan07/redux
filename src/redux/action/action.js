export function changeTextAction(inpVal) {
    return {
        type: "changeText",
        payload: {
            add: "Hello " + inpVal,
        }
    }
}
export function inputActionBulk(data) {
    return {
        type: "inputBulk",
        payload: {
            data: data,
        }
    }
}
export function loadData() {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (response.status === 200) {
                    response.json()
                        .then(result => {
                            console.log(result);
                            dispatch(inputActionBulk(result))
                        })
                }
            })
    }
}