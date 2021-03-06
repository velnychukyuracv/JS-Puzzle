
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
  buttonsWrapper.className="buttonsWrapper";

/*створюєм кнопку Добавити пару (добавити питання і відповідь)*/
var createQuestionAnswer=document.createElement('input');
  buttonsWrapper.appendChild(createQuestionAnswer);
  createQuestionAnswer.value="Добавить пару";
  createQuestionAnswer.type="button";

/*створюєм кнопку Внести у кросворд */
var addPuzzle=createQuestionAnswer.cloneNode(true);
  buttonsWrapper.appendChild(addPuzzle);
  addPuzzle.value="Добавить у кросворд";

/*створюєм кнопку Перевірка відповіді (перевірки правельності введеної відповіді у кросворді)*/
var validAnswer=createQuestionAnswer.cloneNode(true);
  buttonsWrapper.appendChild(validAnswer);
  validAnswer.value="Перевірка відповіді";

/*створюєм блок для введення нових питань і відповідей*/
var addsWrapper=document.createElement('div');
  settingsWrapper.appendChild(addsWrapper);
  addsWrapper.className="addsWrapper";

/*подія реалізує показ полей для вводу нового питання і відповіді на нього після натискання кнопки Добавити пару, та підраховує кількість натискань на кнопку*/
 /*счетчик для присвоєння унікального id питанню та відповіді та підрахунку кількості кліків на кнопку*/

createQuestionAnswer.addEventListener("click", function(){
    var  count=0;
    /*поле для вводу нового питання*/
    var newQuestion=document.createElement('input');
     addsWrapper.appendChild(newQuestion);
     newQuestion.placeholder="Введіть питання";
     newQuestion.type="text";
     newQuestion.id = "newQuestion"+count;

    /*поле для вводу відповіді на питання*/
    var newAnswer=document.createElement('input');
     addsWrapper.appendChild(newAnswer);
     newAnswer.placeholder="Введіть відповідь";
     newAnswer.type="text";
     newAnswer.id = "newAnswer"+count;

    count++;


    return count;
});

var step=count; /*ЗМІННА В ЯКУ ТРЕБА ПЕРЕНЕСТИ КІЛЬКІСТЬ НАТИСКАНЬ З ВИЩЕ ВКАЗАНОЇ ПОДІЇ*/


/*подія реалізує додавання нового питання і відповіді до масиву та побудова кросворду після натискання кнопки Добавити пару*/
addPuzzle.addEventListener("click", function(){

    for(var j=0; j<=step; j++) {

        /*додавння нового питання у масив питань*/
        var quantityQuestion = document.getElementById("newQuestion"+j);
        questionsArray.push(quantityQuestion.value);
        console.log(questionsArray);

        /*додавння відповіді на питання у масив відповідей*/
        var quantityAnswer = document.getElementById("newAnswer"+j);
        answersArray.push(quantityAnswer.value);
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
});

/*/!*заборона на введення недопустимих символів, дозволяє ввод тільки кирилиця нижнього регістру*!/
function replace() {
    this.value = this.value.replace(/[^а-я\s]+/g,'') ;
} ;

for(var i=0; i<questionsArray.length; i++){
    var answer = answersArray[i];
    for(var k=0; k<answer.length; k++){
        document.getElementById("answerInput" + i + k).onkeyup = replace ;
    }
}*/
