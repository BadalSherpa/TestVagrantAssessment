//Finding two consecutive losses
let data = {
    "GT": {
        "pts": 20,
        "per": [1, 1, 0, 0, 1],
    },
    "LSG": {
        "pts": 18,
        "per": [1, 0, 0, 1, 1],
    },
    "RR": {
        "pts": 16,
        "per": [1, 0, 1, 0, 0],
    },
    "DC": {
        "pts": 14,
        "per": [1, 1, 0, 1, 0],
    },
    "RCB": {
        "pts": 14,
        "per": [0, 1, 1, 0, 0],
    },
    "KKR": {
        "pts": 12,
        "per": [0, 1, 1, 0, 1],
    },
    "PBKS": {
        "pts": 12,
        "per": [0, 1, 0, 1, 0]
    },
    "SRH": {
        "pts": 12,
        "per": [1, 0, 0, 0, 0],
    },
    "CSK": {
        "pts": 8,
        "per": [0, 0, 1, 0, 1],
    },
    "MI": {
        "pts": 8,
        "per": [0, 1, 0, 1, 1]
    }
}

let twoConLossTeam = []

let result = [];

function cntConsecutiveElements(array, key) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0 && array[i + 1] === 0 && array[i] === array[i + 1] && !result.includes(key)) {
            result.push(key)
        }
    }
}

function twoConLoss(data) {
    Object.keys(data).map((key) => {
        let arr = data[key].per
        cntConsecutiveElements(arr, key)
    })
}

twoConLoss(data)

console.log(result);