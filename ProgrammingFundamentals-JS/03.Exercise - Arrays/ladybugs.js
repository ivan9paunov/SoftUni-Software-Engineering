function ladybugs(arr) {
    let fieldSize = arr[0];
    let startingLadybugs = arr[1].split(' ').map(Number);
    let field = [];
    
    for (let i = 0; i < fieldSize; i++) {
        if (startingLadybugs.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }

    for (let j = 2; j < arr.length; j++) {
        let command = arr[j];
        let splitCommand = command.split(' ');

        let ladybugPosition = Number(splitCommand[0]);
        let direction = splitCommand[1];
        let steps = Number(splitCommand[2]);
        
        if (!field[ladybugPosition]) {
            continue;
        }

        field[ladybugPosition] = 0;

        if (direction == 'left') {
            let newPosition = ladybugPosition - steps;

            if (newPosition >= 0) {
                while (field[newPosition] == 1) {
                    newPosition -= steps;
                }

                if (newPosition >= 0) {
                    field[newPosition] = 1;
                }
            }
        } else {
            let newPosition = ladybugPosition + steps;

            if (newPosition < field.length) {
                while (field[newPosition] == 1) {
                    newPosition += steps;
                }

                if (newPosition < field.length) {
                    field[newPosition] = 1;
                }
            }
        }
    }

    console.log(field.join(' '));
}

// ladybugs([ 3, '0 1', '0 right 1', '2 right 1' ]);

// ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);

ladybugs([ 5, '3', '3 left 2', '1 left -2']);