
/*створюєм блок для кросворда*/
var puzzleWrapper=document.createElement('div');
document.body.appendChild(puzzleWrapper);
puzzleWrapper.className="wrapper";

/*масив початкових значень для кросворда*/
var questionsArray=['столиця україни?', 'столиця франції?'],
    answersArray = ['київ','париж'];

console.log(questionsArray);
console.log(answersArray);


/*функція побудови кросворда*/
function build(){
    for(var i=0; i<questionsArray.length; i++){
        var question=document.createElement('p');
        question.innerHTML=questionsArray[i];
        puzzleWrapper.appendChild(question);
        var answer = answersArray[i];
        console.log(questionsArray[i]);

        for(var k=0; k<answer.length; k++){
            var answerInput=document.createElement('input');
            puzzleWrapper.appendChild(answerInput);
            answerInput.type="text";
            answerInput.className="answer";
            answerInput.id = "answerInput" + i + k;
            console.log(answer);
        }
    }
    return;
};


/*будуєм кросворд з початкових значень з допомогою функції*/
build();


/*створюєм блок для настройок кросворда*/
var settingsWrapper=document.createElement('div');
document.body.appendChild(settingsWrapper);
settingsWrapper.className="wrapper";
settingsWrapper.style.width="45%";

/*створюєм блок для кнопок*/
var buttonsWrapper=document.createElement('div');
settingsWrapper.appendChild(buttonsWrapper);
buttonsWrapper.style.display="flex";
buttonsWrapper.style.justifyContent="space-around";

/*створюєм кнопку Добавити пару (добавити питання і відповідь)*/
var createQuestionAnswer=document.createElement('input');
buttonsWrapper.appendChild(createQuestionAnswer);
createQuestionAnswer.value="Добавить пару";
createQuestionAnswer.type="button";
createQuestionAnswer.className="addButton";

/*створюєм кнопку Внести у кросворд */
var addPuzzle=document.createElement('input');
buttonsWrapper.appendChild(addPuzzle);
addPuzzle.type="button";
addPuzzle.value="Добавить у кросворд";

/*створюєм кнопку Перевірка відповіді (перевірки правельності введеної відповіді у кросворді)*/
var validAnswer=addPuzzle.cloneNode(true);
buttonsWrapper.appendChild(validAnswer);
validAnswer.value="Перевірка відповіді";

/*створюєм блок для введення нових питань і відповідей*/
var addsWrapper=document.createElement('div');
settingsWrapper.appendChild(addsWrapper);


/*подія реалізує показ полей для вводу нового питання і відповіді на нього після натискання кнопки Добавити пару*/
var  countID=0; /*счетчик для присвоєння унікального id питанню та відповіді*/

createQuestionAnswer.addEventListener("click", function(){

    /*поле для вводу нового питання*/
    var newQuestion=document.createElement('input');
    addsWrapper.appendChild(newQuestion);
    newQuestion.placeholder="Введіть питання";
    newQuestion.type="text";
    newQuestion.className="addInput";
    newQuestion.id = "newQuestion"+countID;

    /*поле для вводу відповіді на питання*/
    var newAnswer=document.createElement('input');
    addsWrapper.appendChild(newAnswer);
    newAnswer.placeholder="Введіть відповідь";
    newAnswer.type="text";
    newAnswer.className="addInput";
    newAnswer.id = "newAnswer"+countID;

    countID=countID+1;
});

/*підрахунок кількості натискань на кнопку Добавити пару*/
window.onload = function () {
    var count=0;
    document.body.onclick = function (e) {
        e = e || event;
        var target = e.target || e.srcElement;
        if (target.className == 'addButton') {
            count++;
            console.log(count);
        }
    }
};


var step=0; /*ЗМІННА В ЯКУ ТРЕБА ПЕРЕНЕСТИ КІЛЬКІСТЬ НАТИСКАНЬ З ВИЩЕ ВКАЗАНОЇ ПОДІЇ*/

/*подія реалізує додавання нового питання і відповіді до масиву та побудова кросворду після натискання кнопки Добавити пару*/
addPuzzle.addEventListener("click", function(){

    for(var j=0; j<=step; j++) {

        /*додавння нового питання у масив питань*/
        var quantityQuestion = document.getElementById("newQuestion"+j).value;
        questionsArray.push(quantityQuestion);
        console.log(questionsArray);

        /*додавння відповіді на питання у масив відповідей*/
        var quantityAnswer = document.getElementById("newAnswer"+j).value;
        answersArray.push(quantityAnswer);
        console.log(answersArray);
    };
    /*очистка блока з кросвордом*/
    puzzleWrapper.innerHTML = '';

    /*будуєм кросворд з новими значеннями масивів з допомогою функції*/
    build();

    /*очистка блока введення нових питань і відповідей*/
    addsWrapper.innerHTML = '';

});

/*подія реалізує перевірку відповіді після натискання кнопки Перевірка відповіді*/
validAnswer.addEventListener("click", function(){
    for(var i=0; i<questionsArray.length; i++){
        var answer = answersArray[i];
        for(var k=0; k<answer.length; k++){
            var x = document.getElementById("answerInput" + i + k).value;
            if (x!=answer[k]) {
                document.getElementById("answerInput" + i + k).style.borderColor="red";
            } else {
                document.getElementById("answerInput" + i + k).style.borderColor="green";
            }
        }
    }
})