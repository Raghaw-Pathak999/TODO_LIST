// Event handler for the 'Save' button click
document.querySelector('.SaveButton').onclick = function () {
    // Checking if the input field is empty
    if (document.querySelector('.InnerContainer input').value.length == 0) {
        alert('Write Something To Save..!'); // Displaying an alert if the input is empty
    } else {
        // Adding a new item to the list (innerTwo)
        document.querySelector('.innerTwo').innerHTML +=
            `<div class="innerThree">
                <span class="SaveList">
                    ${document.querySelector('.InnerContainer input').value}
                </span>
                <button class="Remove"><img class="removeImg" src="./pngwing.com.png"></button>
            </div>`;

        // Adding click event listeners to remove buttons
        let removeButtons = document.querySelectorAll('.Remove');
        removeButtons.forEach(function (removeButton) {
            removeButton.onclick = function () {
                this.parentNode.remove(); // Removing the parent node (item) when the remove button is clicked
            };
        });

        // Adding click event listeners to mark items as completed
        let check = document.querySelectorAll('.innerThree');
        for (let i = 0; i < check.length; i++) {
            check[i].onclick = function () {
                this.classList.toggle('completed'); // Toggling the 'completed' class on item click
            };
        }

        // Clearing the input field after saving the item
        document.querySelector(".InnerContainer input").value = "";
    }
};
