$('#myElement').click(function() {
   // ------------------v--------give $.proxy our function,
   var that = this;
    setTimeout(function() {
        //$(this).addClass('aNewClass');  // Now "this" is again our element
        consolo.log("this is:" + this);
        console.log("that is:" + that);
    },1000);
   // ---^--------------and tell it that we want our DOM element to be the
   //                      value of "this" in the function
});



$('#myElement').click(function() {
   
    setTimeout((function() {
        $(this).addClass('aNewClass');  
    }(this)), 1000);
 
});



(function (i) {
    result[i] = function () {
        return i;
    }
}(i));


function buildList(list) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    //var item = 'item' + list[i];
    var item = 'item' + i;

    result.push( function() {alert(item + ' ' + list[i])} );
  }
  return result;
}

function testList() {
  var fnlist = buildList([1,2,3]);
  // using j only to help prevent confusion - could use i
  for (var j = 0; j < fnlist.length; j++) {
    fnlist[j]();
  }
}



 function creatFunctions() {
     var result = new Array();
     for (var i = 0; i < 10; i++) {
         result[i] = function () {
             return i;
         }
     }
     return result;
 }
 var funcs = creatFunctions();

for (var i = 0; i < funcs.length; i++) {
 	var item = "item" + i;
    document.write(funcs[i]() + item +"<br />");
}


function newClosure(someNum, someRef) {
  // Local variables that end up within closure
  var num = someNum;
  var anArray = [1,2,3];
  var ref = someRef;
  return function(x) {
      num += x;
      anArray.push(num);
      alert('num: ' + num +
          '\nanArray ' + anArray.toString() +
          '\nref.someVar ' + ref.someVar);
    }
}


function newClosure(someNum, someRef) {
  // Local variables that end up within closure
  var num = someNum;
  var anArray = [1,2,3];
  //var ref = someRef;
  var testInnerFunc = function(x) {
      num += x;
      anArray.push(num);
      alert('num: ' + num +
          '\nanArray ' + anArray.toString() +
          '\nref.someVar ' ;
    }
  testInnerFunc();
}

/*==============================================================================*/
var car = {};
car.starter = {};

car.start = function(){
    var that = this;

    // you can access car.starter inside this method with 'this'
    this.starter.active = false;

    var activateStarter = function(){
        // 'this' now points to the global scope
        // 'this.starter' is undefined, so we use 'that' instead.
        that.starter.active = true;

        // you could also use car.starter, but using 'that' gives
        // us more consistency and flexibility
    };

    activateStarter();

};


/*===================share the local var===========================================================*/



function setupSomeGlobals() {
  // Local variable that ends up within closure
  var num = 666;
  // Store some references to functions as global variables
  gAlertNumber = function() { alert(num); }
  gIncreaseNumber = function() { num++; }
  gSetNumber = function(x) { num = x; }
}

/*===================created seperate var===========================================================*/


function newClosure(someNum, someRef) {
  // Local variables that end up within closure
  var num = someNum;
  var anArray = [1,2,3];
  var ref = someRef;
  return function(x) {
      num += x;
      anArray.push(num);
      alert('num: ' + num +
          '\nanArray ' + anArray.toString() +
          '\nref.someVar ' + ref.someVar);
    }
}


var testFunc = newClosure;
testFunc()