// import React, { useCallback, useState } from "react";
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult,
//   ResponderProvided,
// } from "@hello-pangea/dnd";

// interface Person {
//   id: string;
//   name: string;
//   paragraph: string;
// }

// const fakePersons: Person[] = [
//   {
//     id: "1",
//     name: "John",
//     paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     id: "2",
//     name: "Jane",
//     paragraph:
//       "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: "3",
//     name: "Alice",
//     paragraph:
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
// ];

// const DNDPage: React.FC = () => {
//   const [draggableItems, setDraggableItems] = useState<Person[]>(fakePersons);
//   const [droppedItems, setDroppedItems] = useState<Person[]>([]);

//   const onBeforeCapture = useCallback(() => {
//     /* ... */
//   }, []);

//   const onBeforeDragStart = useCallback(() => {
//     /* ... */
//   }, []);

//   const onDragStart = useCallback(() => {
//     /* ... */
//   }, []);

//   const onDragUpdate = useCallback(() => {
//     /* ... */
//   }, []);

//   const onDragEnd = useCallback(
//     (result: DropResult, provided: ResponderProvided) => {
//       const { source, destination, draggableId } = result;
//       if (!destination) {
//         return; // Item dropped outside of droppable area
//       }
//       if (
//         source.droppableId === destination.droppableId &&
//         source.index === destination.index
//       ) {
//         return; // Item dropped in the same position
//       }

//       if (destination.droppableId === "droppable") {
//         const draggedItem = draggableItems.find(
//           (item) => item.id === draggableId
//         );
//         if (draggedItem) {
//           setDraggableItems((prevItems) =>
//             prevItems.filter((item) => item.id !== draggableId)
//           );
//           setDroppedItems((prevItems) => [...prevItems, draggedItem]);
//         }
//       }
//     },
//     [draggableItems]
//   );

//   return (
//     <DragDropContext
//       onBeforeCapture={onBeforeCapture}
//       onBeforeDragStart={onBeforeDragStart}
//       onDragStart={onDragStart}
//       onDragUpdate={onDragUpdate}
//       onDragEnd={onDragEnd}
//     >
//       <div>
//         {/* Draggable Items */}
//         {draggableItems.map((person, index) => (
//           <Draggable key={person.id} draggableId={person.id} index={index}>
//             {(provided) => (
//               <div
//                 ref={provided.innerRef}
//                 {...provided.draggableProps}
//                 {...provided.dragHandleProps}
//                 style={{
//                   ...provided.draggableProps.style,
//                   border: "1px solid black",
//                   padding: "8px",
//                   margin: "8px",
//                   backgroundColor: "lightgray",
//                   width: "200px",
//                 }}
//               >
//                 <h3>{person.name}</h3>
//                 <p>{person.paragraph}</p>
//               </div>
//             )}
//           </Draggable>
//         ))}

//         {/* Droppable Area */}
//         <Droppable droppableId="droppable">
//           {(provided) => (
//             <div
//               ref={provided.innerRef}
//               {...provided.droppableProps}
//               style={{
//                 border: "1px dashed black",
//                 padding: "8px",
//                 margin: "8px",
//                 backgroundColor: "lightblue",
//                 width: "300px",
//                 minHeight: "200px",
//               }}
//             >
//               {droppedItems.map((person) => (
//                 <div key={person.id}>
//                   <h3>{person.name}</h3>
//                   <p>{person.paragraph}</p>
//                 </div>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </div>
//     </DragDropContext>
//   );
// };

// export default DNDPage;

import React, { useCallback, useState } from "react";
import {
  DragDropContext,
  DropResult,
  ResponderProvided,
} from "@hello-pangea/dnd";

interface Person {
  id: string;
  name: string;
  paragraph: string;
}

const fakePersons: Person[] = [
  {
    id: "1",
    name: "John",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    name: "Jane",
    paragraph:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    name: "Alice",
    paragraph:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const DNDPage: React.FC = () => {
  const [droppedItems, setDroppedItems] = useState<Person[]>([]); // State to track dropped items

  const onBeforeCapture = useCallback(() => {
    /* ... */
  }, []);

  const onBeforeDragStart = useCallback(() => {
    /* ... */
  }, []);

  const onDragStart = useCallback(() => {
    /* ... */
  }, []);

  const onDragUpdate = useCallback(() => {
    /* ... */
  }, []);

  const onDragEnd = useCallback(
    (result: DropResult, provided: ResponderProvided) => {
      const { source, destination, draggableId } = result;
      if (!destination) {
        return;
      }
      if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
      ) {
        return;
      }

      if (destination.droppableId === "droppable") {
        const droppedPerson = fakePersons.find(
          (person) => person.id === draggableId
        );
        if (droppedPerson) {
          setDroppedItems((prevItems) => [...prevItems, droppedPerson]);
        }
      }
    },
    []
  );

  return (
    <DragDropContext
      onBeforeCapture={onBeforeCapture}
      onBeforeDragStart={onBeforeDragStart}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <div>
        {fakePersons.map((person) => (
          <div
            key={person.id}
            draggable
            style={{
              border: "1px solid black",
              padding: "8px",
              margin: "8px",
              backgroundColor: "lightgray",
              width: "200px",
            }}
          >
            <h3>{person.name}</h3>
            <p>{person.paragraph}</p>
          </div>
        ))}

        <div
          id="droppable"
          style={{
            border: "1px dashed black",
            padding: "8px",
            margin: "8px",
            backgroundColor: "lightblue",
            width: "300px",
            minHeight: "200px",
          }}
        >
          {droppedItems.map((person) => (
            <div key={person.id}>
              <h3>{person.name}</h3>
              <p>{person.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </DragDropContext>
  );
};

export default DNDPage;
