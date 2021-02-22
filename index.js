function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*'){
    return function(adjective='special') {
        return `You are ${flair}${adjective}${flair}!`
      }
}

let Calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    },

    multiply: function(a, b) {
        return a * b;
    },

    divide: function(a, b) {
        return a / b;
    }
}

let actionApplyer = function(integer, functions){
    let start = integer;
    for(let f of functions) {
        start = f(start);
    }

    return start;
}