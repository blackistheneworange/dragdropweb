# dragdropweb
Create a drag drop feature in a webpage with auto-shifting when placed over existing items in the area.

To learn about how the drag/drop api actually works, please refer to the MDN docs for Drag and Drop API.

Basically, what this script does is that when dragging an item either from the drop area (or) initial area and dropping it in a target spot, the handleDragDrop function will check if element on which the target is being dropped is already a draggable element. If it is, then the target element is placed before that element using insertBefore property on the parent element. If not, then the target is simply appended as the child to the target area.
