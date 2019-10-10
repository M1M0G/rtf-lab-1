/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number)
{
    var num = 0;
    let newArray = [];
    var lengthOfElem = array.every(item => item.length === 1);// Решил использовать флаги для того чтобы лучше разобраться с работой every
    var typeOfElem = array.every(item => typeof item === 'number');//Проверка на тип данных
    var integer = array.every(item => Number.isInteger(item));
    var arrayIsExist = isNaN(array);// Проверка на существование массива

    if (lengthOfElem === true && typeOfElem === true && arrayIsExist === false && integer === true && number.isInteger === true)
    {
        //for(let i = 0; i < array.length; i++)
        //    if (array[i].isInteger === false ) throw null;
            //if (array[i].isInteger == false ) throw null;
        num = array.join();
        num = Number(num.replace(/,/g, ''));
        num += number;
        newArray = num.toString(10).split('').map(Number);
    }
    else
        return null;// не подходит по усовию
    return newArray;// возвращаю массив

module.exports = {
    addNumber
};

