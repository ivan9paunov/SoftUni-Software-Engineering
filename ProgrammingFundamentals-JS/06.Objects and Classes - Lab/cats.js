function cats(catsArr) {
    class Cat {
        catName;
        catAge;

        constructor(catName, catAge) {
            this.catName = catName;
            this.catAge = catAge;
        }

        meow() {
            console.log(`${this.catName}, age ${this.catAge} says Meow`);
        }
    }

    let cats = [];

    for (let cat of catsArr) {
        let catInfo = cat.split(' ');
        let catName = catInfo[0];
        let catAge = Number(catInfo[1]);

        

        let myCat = new Cat(catName, catAge);

        cats.push(myCat);
    }
    
    for (let cat of cats) {
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);