/**
 * Counts the number of elements in the mutable indexed sequence which satisfy a predicate (f).
 */
Array.prototype.count = function (f) {
    return arguments.length == 0 ? this.length : this.filter(f).length;
};

/**
 *  Computes the multiset difference between this array and another sequence.
 * */
Array.prototype.diff = function (that) {
    return this.filter(function (e1) {
        return !that.exists(function (e2) {
            return e1 == e2;
        });
    });
};

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
 * Tests whether a predicate holds for at least one element of this array. O(n)
 * Ugly but O(1) in the best case. While filter().length would be 0(n).
 * */
Array.prototype.exists = function (p) {
    for (var i = 0; i < this.length; i++)
        if (p(this[i])) return true;
    return false
};

/**
 * Selects all elements of this array which don't satisfy a predicate.
 * */
Array.prototype.filterNot = function (p) {
    return this.filter(function (e) {
        return !p(e);
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
 * Flattens a two-dimensional array by concatenating all its rows into a single array.
 * */
Array.prototype.flatten = function () {
    return this.reduce(function (a, b) {
        return a.concat(b);
    });
};

/**
 * Folds the elements of this array using the specified associative predicate.
 * */
Array.prototype.fold = function (init) {
    var self = this;

    return function (f) {
        return self.reduce(f, init);
    };
};

/**
 * Tests whether a predicate holds for all elements of this array.
 * */
Array.prototype.forall = Array.prototype.every;

/**
 * Partitions elements in fixed size mutable indexed sequences.
 * */
Array.prototype.grouped = function (parts) {
    //todo
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
 * Returns the first element of the array.
 * */
Array.prototype.head = function () {
    return this[0];
};

/**
 *  Finds index of the first element satisfying some predicate after or at some start index.
 * */
Array.prototype.indexWhere = function (f, from) {
    var start = this.slice((typeof from === "undefined") ? 0 : from);

    for (var i = start; i < this.length; i++)
        if (f(this[i])) return i;

    return -1;
};

/**
 * Returns an array consisting of all original elements except the
 * last one.
 * */
Array.prototype.init = function () {
    return this.slice(0, this.length - 1)
};

/**
 * Computes the multiset intersection between this array and another sequence.
 **/
Array.prototype.intersect = function (that) {
    return this.filter(function (e) {
        return that.indexOf(e) > -1;
    });
};

/**
 * Tests whether this array contains given index.
 **/
Array.prototype.isDefinedAt = function (index) {
    return -1 < index && this.length > index
};

/**
 *  Tests whether this array is empty.
 **/
Array.prototype.isEmpty = function () {
    return this.length == 0;
};

/**
 * Returns the last element of the array.
 * */
Array.prototype.last = function () {
    return this[this.length - 1];
};

/**
 * Finds the maximum value in the array. Notice that it supposes all
 * elements are of the same and comparable.
 */
Array.prototype.max = function () {
    return this.maxBy(function (e) {
        return e;
    });
};


/**
 * Finds the first element which yields the largest value measured by function f.
 **/
Array.prototype.maxBy = function (f) {
    return this.reduce(function (a, b) {
        return f(a) > f(b) ? a : b;
    });
};


/**
 * Finds the minimum value in the array. Notice that it supposes all
 * elements are of the same and comparable.
 */
Array.prototype.min = function () {
    return this.minBy(function (e) {
        return e;
    });
};

/**
 * Finds the first element which yields the smallest value measured by function f.
 */
Array.prototype.minBy = function (f) {
    return this.maxBy(function (e) {
        return -f(e);
    });
};

/**
 * Returns an array consisting of all original elements except the
 * first one.
 * */
Array.prototype.tail = function () {
    return this.slice(1);
};

/**
 * Returns the sum of all elements of the array.
 * */
Array.prototype.sum = function () {
    return this.reduce(function (a, b) {
        return a + b;
    });
};

/**
 * Zips two arrays.
 * */
Array.prototype.zip = function (that) {
    var result = [];

    for (var i = 0; i < Math.min(that.length, this.length); i++)
        result.push([this[i], that[i]])

    return result;
};