let tableGenerator = {
    randomNumber: function(min, max){
        return console.log(Math.random() * (max - min) + min);
    },

    generateIncTable: function(nr){
        let newArr = new Array();
        for(let i = 0; i < nr; i++)
        {
            newArr.push(i)
        }
        console.log(newArr);
        return newArr;
    },

    generateRandomTable: function(lng, min, max){
        let newArr = [];

        for(let i = 0; i < lng; i++)
        {
            newArr.push(Math.random() * (max - min) + min)
        }
        console.log(newArr);
        return newArr;

    },

    generateTableFromText: function(str){
        let newArr = new Array();
        splittedStr = str.split(" ");
        for(let i = 0; i < splittedStr.length; i++)
        {
            newArr.push(splittedStr[i]);
        }
        console.log(newArr);
        return newArr;
    },

    getMaxFromTable: function(arr){
        return console.log(Math.max(...arr));
    },

        getMinFromTable: function(arr){
        return console.log(Math.min(...arr));
    },

    delete: function(arr, index){
        arr.splice(index, 1);
        console.log(arr);
        return arr;
    }
}
tableGenerator.randomNumber(1,33);
tableGenerator.generateIncTable(5);
tableGenerator.generateRandomTable(7,21,99);
tableGenerator.generateTableFromText("abecadło z pieca spadło");
tableGenerator.getMaxFromTable([34,12,22,16,2,56,21,89,0,7,2,77]);
tableGenerator.getMinFromTable([23,64,17,1,73,87,34,52,14]);
tableGenerator.delete([3,12,51,264,21,1717], 3);