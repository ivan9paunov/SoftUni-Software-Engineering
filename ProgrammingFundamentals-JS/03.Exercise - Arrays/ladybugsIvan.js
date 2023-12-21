function ladybugs(arr) {
    let fieldSize = arr[0];
    let field = Array(fieldSize).fill(0);
    let ladybugs = arr[1].split(' ');
    
    for (let i = 0; i < ladybugs.length; i++) {
        let currentLadybugPosition = Number(ladybugs[i]);
        if (currentLadybugPosition >= 0 && currentLadybugPosition < field.length) {
            field[currentLadybugPosition] = 1;
        }
    }
    
    for (let i = 2; i < arr.length; i++) {
        let splitMovement = arr[i].split(' ');
        let ladybugPosition = Number(splitMovement[0]);
        let direction = splitMovement[1];
        let steps = Number(splitMovement[2]);
        let currentStep = ladybugPosition;
        
        if ((ladybugPosition >= 0 && ladybugPosition < field.length) && field[ladybugPosition] == 1) {
            if (direction == 'right' && steps >= 0) {

                while (currentStep < arr.length) {
                    field[ladybugPosition] = 0;
                    currentStep = currentStep + steps;
                    if (currentStep > arr.length) {
                        break;
                    } else if (field[currentStep] == 1) {
                        continue;
                    } else if (field[currentStep] == 0) {
                        field[currentStep] = 1;
                        break;
                    }
                }
            
            } else if (direction == 'right' && steps < 0) {

                while (currentStep >= 0) {
                    field[ladybugPosition] = 0;
                    currentStep = currentStep + steps;
                    if (currentStep < 0) {
                        break;
                    } else if (field[currentStep] == 1) {
                        continue;
                    } else if (field[currentStep] == 0) {
                        field[currentStep] = 1;
                        break;
                    }
                }

            } else if (direction == 'left' && steps > 0) {

                while (currentStep >= 0) {
                    field[ladybugPosition] = 0;
                    currentStep = currentStep - steps;
                    if (currentStep < 0) {
                        break;
                    } else if (field[currentStep] == 1) {
                        continue;
                    } else if (field[currentStep] == 0) {
                        field[currentStep] = 1;
                        break;
                    }
                }

            } else if (direction == 'left' && steps < 0) {

                while (currentStep < arr.length) {
                    field[ladybugPosition] = 0;
                    currentStep = currentStep - steps;
                    if (currentStep > arr.length) {
                        break;
                    } else if (field[currentStep] == 1) {
                        continue;
                    } else if (field[currentStep] == 0) {
                        field[currentStep] = 1;
                        break;
                    }
                }
            }
        }
    }

    console.log(field.join(' '));
}

// ladybugs([ 3, '0 1', '0 right 1', '2 right 1' ]);

// ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);

ladybugs([ 5, '3', '3 left 2', '1 left -2']);