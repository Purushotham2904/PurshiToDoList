document.querySelector('.add').addEventListener('click',function () {
  let textInput = document.querySelector('.text-input'); // fetch input text
  let taskText = textInput.value; // store the input text in variable

  let taskDiv = document.createElement('div');
  taskDiv.classList.add('task')

  let span = document.createElement('span');
  span.innerHTML = taskText;
  span.addEventListener('click', function() {
    this.classList.toggle('completed')
  })

  let delButton = document.createElement('button');
  delButton.innerHTML = 'delete';

  delButton.addEventListener('click', function() {
    taskDiv.remove();
  })

  taskDiv.appendChild(span);
  taskDiv.appendChild(delButton);
  document.querySelector('.task-container').appendChild(taskDiv)
})


