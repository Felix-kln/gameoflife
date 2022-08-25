import { useEffect, useRef } from "react";

export const useDragging = <Element extends HTMLElement>() => {
  const elementReference = useRef<Element>(null);

  useEffect(() => {
    if (elementReference.current !== null) {
      const draggedElement = elementReference.current;

      let mouseDown = false;
      let startX: number;
      let startY: number;
      let scrollLeft: number;
      let scrollTop: number;

      const startDragging = (event: DocumentEventMap["mousedown"]) => {
        mouseDown = true;
        startX = event.pageX - draggedElement.offsetLeft;
        startY = event.pageY - draggedElement.offsetTop;
        scrollLeft = draggedElement.scrollLeft;
        scrollTop = draggedElement.scrollTop;
      };

      const stopDragging = () => {
        mouseDown = false;
      };

      const mouseMove = (event: DocumentEventMap["mousemove"]) => {
        event.preventDefault();
        if (!mouseDown) {
          return;
        }
        const x = event.pageX - draggedElement.offsetLeft;
        const scroll = x - startX;
        draggedElement.scrollLeft = scrollLeft - scroll;
        const y = event.pageY - draggedElement.offsetTop;
        const scrollY = y - startY;
        draggedElement.scrollTop = scrollTop - scrollY;
      };

      draggedElement.addEventListener("mousemove", mouseMove);
      draggedElement.addEventListener("mousedown", startDragging);
      draggedElement.addEventListener("mouseup", stopDragging);
      draggedElement.addEventListener("mouseleave", stopDragging);

      return () => {
        draggedElement.removeEventListener("mousemove", mouseMove);
        draggedElement.removeEventListener("mousedown", startDragging);
        draggedElement.removeEventListener("mouseup", stopDragging);
        draggedElement.removeEventListener("mouseleave", stopDragging);
      };
    }
  }, []);

  return elementReference;
};
