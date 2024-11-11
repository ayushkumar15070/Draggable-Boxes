const boxes = document.querySelectorAll('.draggable-box');

boxes.forEach(box => {
      box.addEventListener('mousedown', (e) => {
            let shiftX = e.clientX - box.getBoundingClientRect().left;
            let shiftY = e.clientY - box.getBoundingClientRect().top;

            box.style.position = 'absolute';
            box.style.zIndex = 1000;
            document.body.append(box);

            moveAt(e.pageX, e.pageY);

            function moveAt(pageX, pageY) {
                  box.style.left = pageX - shiftX + 'px';
                  box.style.top = pageY - shiftY + 'px';
            }

            function onMouseMove(event) {
                  moveAt(event.pageX, event.pageY);
            }

            document.addEventListener('mousemove', onMouseMove);

            box.onmouseup = function () {
                  document.removeEventListener('mousemove', onMouseMove);
                  box.onmouseup = null;
            };
      });

      box.ondragstart = function () {
            return false;
      };
});
