'use strict';

let money = +prompt('Ваш бюджет на месяц?', '2000');


let d = new Date();
let strDate = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
let time = prompt("Введите дату в формате YYYY-MM-DD", strDate); 


let appData = {
    //бюджет (передаем сюда переменную из п.2)
    budget: money,

    //данные времени - timeData (передаем сюда переменную из п.2)
    timeData: time,

    //объект с обязательными расходами - expenses (смотри пункт 4)
    expenses: {},

    // объект с необязательными расходами - optionalExpenses 
    //(оставляем пока пустым)
    optionalExpenses: {},

    // массив данных с доп. доходом - income (оставляем пока пустым)
    income: [], 

    // свойство savings (выставляем его как false)
    savings: false
};

function notEmpty(a) {
    return (a != null) && (a != '');
}

function isNumber(b) {
    return (typeof(b) == 'number') &&  !isNaN(b);
}

function isEnd(a) {
    return a == 'end';
}

function unique(a) {
    return (appData.expenses[a] == null);
}

let article, budgetOfArticle;
do {
    article = prompt('Обязательная статья расходов', 'Продукты');
    
    if (article == null) {
        break;
    }

    if (!unique(article)) {
        alert('Такая статья расходов уже встречалась');
    }
    else if (!isEnd(article)) {
        budgetOfArticle = +prompt('Во сколько обойдется?', '100');
        
        if (budgetOfArticle == 0) {
            break;
        }
         
        switch (true) {
            case notEmpty(article) && isNumber(budgetOfArticle):
                    
                appData.expenses[article] = budgetOfArticle;    
                break;
        
            case !isNumber(budgetOfArticle):  
                alert('Введите бюджет в цифровом виде');
                break;
    
            default:
                break;
        }
    }
    
} while (!isEnd(article));

console.log(appData);