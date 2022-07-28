let input = document.getElementById("input");
let add = document.getElementById("add");
let boxes = document.querySelectorAll(".box");
let drag = null;

add.onclick = function() {
  if(input.value != ""){
    boxes[0].innerHTML += `
    <p class="item" draggable="true">${input.value}</p>
    `
    input.value = "";
  }

  dragItem();
};

function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach(item => {
    item.addEventListener("dragstart", function() {
      drag = item;
      item.style.opacity = "0.5";
    });

    item.addEventListener("dragend", function() {
      drag = null;
      item.style.opacity = "1";
    });

    boxes.forEach(box => {
      box.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.style.backgroundColor = "#090";
        this.style.color = "white";
      });

      box.addEventListener('dragleave', function() {
        this.style.backgroundColor = "white";
        this.style.color = "black";
      });

      box.addEventListener("drop", function() {
        box.append(drag);
        this.style.backgroundColor = "white";
        this.style.color = "black";
      })
    })

  });
}
