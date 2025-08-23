import React from "react";

const ConditionalRendering = () => {
  /**
   * There are three types of conditional rendering in React.
   * which we use to display something on the UI based on some condition.
   * 1. if else 2. ternary 3. logical
   */
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div>Conditional Rendering</div>
      <ul>
        {
            numbers.map((number, index) => 
                number % 2 === 0? (
                    <li key={index}>{number}</li>
                ): null
            )
        }
      </ul>
    </>
  );
};

export default ConditionalRendering;
