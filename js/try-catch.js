function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');

    

   try{
    const age = parseInt(ageText);
    if(isNaN(age)){
    //    console.log('age not found', age, ageText);
    throw 'please enter a number';
    }else if(age < 18){
        throw 'bacha kacha not allowed'
    }else if(age > 30){
        throw 'murobbi ra aikhan aisen na'
    }
    errorTag.innerHTML = "";
   }
   catch(err){
    console.log("ERROR:", err);
    errorTag.innerHTML = 'Error :' + err;
   }
   finally{
    console.log('All done inside try catch');
   }
   console.log(1321321);
}