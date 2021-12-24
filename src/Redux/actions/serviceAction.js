// {
//     type: "Apply_For_Service",
//         payload: {

//     }
// }

// Action helper function/action creator function

export function applyForService(payload) {
    return {
        type: "Apply_For_Service",
        payload
    }
}

export function removeOrder(payload) {
    return {
        type: "Removr_Order",
        payload
    }
}