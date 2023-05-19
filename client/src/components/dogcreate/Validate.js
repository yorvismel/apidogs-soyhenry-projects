export  const validate = (input) => {
    let errors = {}
    if(!input.name){
        errors.name = 'Must be a name'
    }

    if(input.name && !/^[a-zA-Z]*$/.test(input.name)){
        errors.name = 'The name can not contain numbers or special caracters'
    }

    if(!input.height_min || input.height_min <= 0){
        errors.height_min = 'The min height must be bigger'
    }
    if(!input.height_max || input.height_max <= 0){
        errors.height_max = 'The max height must be bigger'
    }

    if(parseInt(input.height_min) >= parseInt(input.height_max)){
        errors.especial1 = 'The height min can not be bigger or equal than the max height'
    }

    if(parseInt(input.weight_min) >= parseInt(input.weight_max)){
        errors.especial2 = 'The weight min can not be bigger or equal than the max weight'
    }


    if(input.height){
        if (!/^[0-9]*$/){
            errors.height = 'It must be only numbers'
        }
    }
    if (!input.weight_min || input.weight_min <= 0){
        errors.weight_min = 'The min weight must be bigger'
    }

    if(input.weight_min){
        if(input.weight_max){
            if (!/^[0-9]*$/) {
                errors.weight_min = 'It must be only numbers'
            }
        }
    }
    
    if (!input.weight_max || input.weight_max <= 0){
        errors.weight_max = 'The max weight must be bigger'
    }
    if(input.weight_max){
        if (!/^[0-9]*$/) {
            errors.weight_max = 'It must be only numbers'
        }
    }

    if (!input.lifeTime || input.lifeTime <= 0){
        errors.lifeTime = 'The life span must be grather'
    }
    if(input.lifeTime){
        if (!/^[0-9]*$/) {
            errors.lifeTime = 'It must be only numbers'
        }
    }

    return errors

}