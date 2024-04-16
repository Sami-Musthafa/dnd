// import React, { useState } from "react";
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DraggableStyle,
//   DropResult,
// } from "@hello-pangea/dnd";

// type Item = {
//   id: string;
//   content: string;
// };

// const getItems = (count: number) =>
//   Array.from({ length: count }, (v, k) => k).map((k) => ({
//     id: `item-${k}`,
//     content: `item ${k}`,
//   }));

// const reorder = <TList extends unknown[]>(
//   list: TList,
//   startIndex: number,
//   endIndex: number
// ): TList => {
//   const result = Array.from(list) as TList;
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };

// const withAssortedSpacing = () => ({
//   // margin: "10, 0 30, 40"
//   marginTop: 10,

//   // marginBottom: 20,
//   marginLeft: 30,
//   marginRight: 40,
//   // padding: '10 30 20 40'
//   paddingTop: 10,
//   paddingBottom: 20,
//   paddingLeft: 30,
//   paddingRight: 40,
//   // border: '2px solid purple'
//   borderStyle: "solid",
//   borderColor: "purple",
// });

// const getItemStyle = (
//   isDragging: boolean,
//   draggableStyle: DraggableStyle = {}
// ) => ({
//   userSelect: "none" as const,
//   ...withAssortedSpacing(),
//   background: isDragging ? "lightgreen" : "pink",
//   ...draggableStyle,
// });

// const App: React.FC = () => {
//   const [items, setItems] = useState<Item[]>(getItems(10));

//   const onDragEnd = (result: DropResult) => {
//     if (!result.destination) {
//       return;
//     }

//     const newItems = reorder(
//       items,
//       result.source.index,
//       result.destination.index
//     );

//     setItems(newItems);
//   };

//   return (
//     <>
//       <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//         <DragDropContext onDragEnd={onDragEnd}>
//           <Droppable droppableId="droppable">
//             {(droppableProvided) => (
//               <div
//                 ref={droppableProvided.innerRef}
//                 style={{
//                   width: 250,
//                   background: "lightblue",
//                   ...withAssortedSpacing(),

//                   marginTop: 0,
//                 }}
//               >
//                 {items.map((item, index) => (
//                   <Draggable key={item.id} draggableId={item.id} index={index}>
//                     {(draggableProvided, draggableSnapshot) => (
//                       <div
//                         ref={draggableProvided.innerRef}
//                         {...draggableProvided.draggableProps}
//                         {...draggableProvided.dragHandleProps}
//                         style={getItemStyle(
//                           draggableSnapshot.isDragging,
//                           draggableProvided.draggableProps.style
//                         )}
//                       >
//                         {item.content}
//                       </div>
//                     )}
//                   </Draggable>
//                 ))}
//                 {droppableProvided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </DragDropContext>
//         {/* <DragDropContext onDragEnd={onDragEnd}>
//           <Droppable droppableId="droppable">
//             {(droppableProvided) => (
//               <div
//                 ref={droppableProvided.innerRef}
//                 style={{
//                   width: 250,
//                   background: "lightblue",
//                   ...withAssortedSpacing(),

//                   marginTop: 0,
//                 }}
//               >
//                 {items.map((item, index) => (
//                   <Draggable key={item.id} draggableId={item.id} index={index}>
//                     {(draggableProvided, draggableSnapshot) => (
//                       <div
//                         ref={draggableProvided.innerRef}
//                         {...draggableProvided.draggableProps}
//                         {...draggableProvided.dragHandleProps}
//                         style={getItemStyle(
//                           draggableSnapshot.isDragging,
//                           draggableProvided.draggableProps.style
//                         )}
//                       >
//                         {item.content}
//                       </div>
//                     )}
//                   </Draggable>
//                 ))}
//                 {droppableProvided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </DragDropContext> */}
//       </div>
//     </>
//   );
// };

// export default App;

import DNDPage from "./components/dnd";

const App = () => {
  return (
    <>
      <DNDPage />
    </>
  );
};

export default App;
