//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'


//resolve // QUESTION 1 here

const changeLetter = document.querySelector('.square');

changeLetter.addEventListener('click', () => {
        changeText();
    });

function changeText() {
    if (changeLetter.innerHTML === 'X') {
         changeLetter.innerHTML = 'O';
    }else {
        changeLetter.innerHTML = 'X';
    }
}



//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'


const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];


//resolve // QUESTION 2 here

const removeItemButton = document.querySelector('button.remove-item')

removeItemButton.addEventListener('click', () => {
    let select = document.getElementsByTagName('select')[0];
    select.remove(select.selectedIndex);
});




//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)

const calculate_sphere = () => {

    //Get the input value for radius
    let radius = document.getElementById('radius').value;
    radius = Math.abs(radius);
    
     //Generate the volume for the sphere
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(5);
    document.getElementById('volume').value = volume;
    
    //Generate the area for the sphere
    let area = 4 * Math.PI * Math.pow(radius, 2);
    area = area.toFixed(5);
    document.getElementById('area').value = area;
    
    return false;

 }


window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked




//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 


//resolve // QUESTION 4 here

//hide-show question 1
function hideQuestion1() {
    let answer1 =  document.getElementById('q-1');
    if (answer1.style.display === 'block') {
        answer1.style.display = 'none';
    }else {
        answer1.style.display = 'block';
    }
}

//hide-show question 2
function hideQuestion2() {
    let answer2 =  document.getElementById('q-2');
    if (answer2.style.display === 'block') {
        answer2.style.display = 'none';
    }else {
        answer2.style.display = 'block';
    }

}

//hide-show question 3
function hideQuestion3() {
    let answer3 =  document.getElementById('q-3');
    if (answer3.style.display === 'block') {
        answer3.style.display = 'none';
    }else {
        answer3.style.display = 'block';
    }

}















