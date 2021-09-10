document.querySelector('.thetable').addEventListener('mouseover', function(){
    document.querySelector('.thecircle').style.display ="block";
});

document.querySelector('.thetable').addEventListener('mouseup', function(){
    document.querySelector('.thecircle').style.display ="none";
});













//Budget COntroller

var budgetController = (function (){


    //some codes.


})();



//UI Controller

var UIcontroller = (function(){

    //A var that store all the input field into an object.
    var DOMStrings = {
        inputtype : '.add_item',
        inputdescription : '.add_description',
        inputvalue : '.add_value',
        inputbtn : ".add_item_btn"
    };

        // a or the module will return an object
        return{
            //To create a method that return an object    
            getinput : function(){
                return {
                    //Get the input from the DOM and equal to the object property
                    type : document.querySelector(DOMStrings.inputtype).value, //Which can either be inc or exp.
                    description : document.querySelector(DOMStrings.inputdescription).value,
                    value : document.querySelector(DOMStrings.inputvalue).value
                }
            },

            
            // To make DOMStrings public, we create a method for it that returns the object DOMStrings
            getDOMStrings : function(){
                return DOMStrings;
                
            }


        }

    //some codes

})();








//Global App controller

var controller = (function(budgetCtrl, UICtrl){


    //To setevent Listener (holding all the vent listener)
    var setupEventListener = () => {

        
    //for add-item button
    document.querySelector(DOM.inputbtn).addEventListener('click', ctrlAddItem);

    //for enter keypress
    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });

    }

    //To enable access to the DOMStrings in the UIcontroller and also manipulation of the input data
    var DOM = UICtrl.getDOMStrings();
    



    //Allow DRY priciple create a fucntion that is pass to the click and keyboard events
    var ctrlAddItem = function (){

        //To enable access to the users input in the UIcontroller and also manipulation of the input data
        var input = UICtrl.getinput();


        console.log(input);

    }



    return{
        init : function(){
            setupEventListener();
            console.log('Application has started');
        }
    }



})(budgetController, UIcontroller);


  