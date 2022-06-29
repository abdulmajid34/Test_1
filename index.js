function fishing(num) {
    for(let i = 2; i < num; i++) {
        if(num % 3 === 0) {
            return 'fish'
        }

        if(num % 5 === 0) {
            return 'bash'
        }

        if(num % 15 === 0) {
            return 'fish bash'
        }
    }
}

// TEST
console.log(fishing(80));


// =========== No.2 ===================
function sorting(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp
            }
        }
    }
    return array
} 

// TEST
console.log(sorting([9, 4, 3, 6, 7, 5]))

// ============ No. 3 ======================
function palindrome(str) {
    let temp = "";

    for(let i = str.length - 1; i >= 0; i--) {
        temp += str[i]
    }

    if(str === temp) {
        return true
    } else {
        return false
    }
}

// TEST
console.log(palindrome('buah'))