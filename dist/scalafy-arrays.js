/**
 *  Finds all different elements in an array.
 * */
Array.prototype.distinct = function () {
    return this.reduce(function (a, b) {
        if (a.indexOf(b) == -1) a.push(b);
        return a;
    }, [])
};


/**
 * Receives a grouping function and returns a json composed by all
 * distinct keys associated with their elements.
 * */
Array.prototype.groupBy = function (gf) {
    return this.reduce(function (a, b) {
        var key = gf(b);

        if (key in a) a[key].push(b);
        else a[key] = [b];

        return a;
    }, {});
};

/**
 * Flattens an a double leveled array into a single level one.
 * */
Array.prototype.flatten = function () {
    return this.reduce(function (a, b) {
        return a.concat(b);
    });
};

/**
 * Receives a mapping function and executes de function for every
 * element in the array and flatten the result.
 */
// todo: Add exception in case the array isn't double nested.
Array.prototype.flatMap = function (mf) {
    return this.map(function (e) {
        return e.map(mf);
    }).flatten();
};

/**
 * Finds the maximum value in the array. Notice that it supposes all
 * elements are of the same and comparable.
 */
Array.prototype.max = function () {
    return this.reduce(function (a, b) {
        return a > b ? a : b;
    });
};

/**
 * Finds the minimum value in the array. Notice that it supposes all
 * elements are of the same and comparable.
 */
Array.prototype.min = function () {
    return this.reduce(function (a, b) {
        return a < b ? a : b;
    });
};

/**
 * Returns the first element of the array.
 * */
Array.prototype.head = function () {
    return this[0];
};

/**
 * Returns an array consisting of all original elements except the
 * first one.
 * */
Array.prototype.tail = function () {
    return this.slice(1);
};

/**
 * Returns an array consisting of all original elements except the
 * last one.
 * */
Array.prototype.init = function () {
    return this.slice(0, this.length - 1)
};

/**
 * Returns the last element of the array.
 * */
Array.prototype.last = function () {
    return this[this.length - 1];
};

/**
 * Returns the sum of all elements of the array.
 * */
Array.prototype.sum = function () {
    return this.reduce(function (a, b) {
        return a + b;
    });
};