(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        } else {
            return str + this;
        }
    };
    String.prototype.ensureEnd = function (str) {
        return this.endsWith(str) ? this.toString() : this + str;
    };
    String.prototype.isEmpty = function () {
        return this.length == 0 ? true : false;
    };
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }

        if (this.length <= n) {
            return this.toString();
        }

        if (this.includes(' ')) {
            let splittedStr = this.split(' ');
            let trimmed = [];
            for (let word of splittedStr) {
                if (trimmed.join(' ').length + word.length + 3 <= n) {
                    trimmed.push(word);
                } else {
                    break;
                }
            }

            return trimmed.join(' ') + '...';

        }
        
        return this.slice(0, n - 3) + '...';
    };
    String.format = function (str, ...params) {

        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);
        }

        return str;
    }
})();

let str = 'my string';

str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
// str = String.format('The {0} {1} fox', 'quick', 'brown');
str = String.format('the {0} brown {1} jumps over the {2} dog', 'quick', 'fox', 'lazy', 'bananas');
console.log(str);
str = String.format('jumps {0} {1}', 'dog');
console.log(str);