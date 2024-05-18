import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./Accordian.module.css";
import { useState } from "react";

const Accordian = () => {
  // Learning one

  let [isVisibleOne, setIsVisibleOne] = useState(false);
  let [isVisibleTwo, setIsVisibleTwo] = useState(false);
  let [isVisibleThree, setIsVisibleThree] = useState(false);

  // Learning one ends

  // Learning two

  const handleOnClickOne = () => {
    setIsVisibleOne(!isVisibleOne);
  };

  const handleOnClickTwo = () => {
    setIsVisibleTwo(!isVisibleTwo);
  };

  const handleOnClickThree = () => {
    setIsVisibleThree(!isVisibleThree);
  };

  // Learning two Ends

  return (
    <div>
      <div>
        <div className={styles.AccoTitle} onClick={handleOnClickOne}>
          <button type="button">
            <h3>Accordian One</h3>

            {/* Learning Three */}
            {isVisibleOne ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
            {/* Learning three ends */}
          </button>

          {/* <FontAwesomeIcon icon={faAngleDown} /> */}
        </div>
        {isVisibleOne && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            voluptate animi quis aspernatur ut in quo aliquam a asperiores rerum
            eveniet minus, laborum quod! Et, necessitatibus possimus. Et,
            possimus delectus?
          </p>
        )}
      </div>
      <div>
        <div className={styles.AccoTitle} onClick={handleOnClickTwo}>
          <button type="button">
            <h3>Accordian Two</h3>

            {/* Learning Three */}
            {isVisibleTwo ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
            {/* Learning three ends */}
          </button>

          {/* <FontAwesomeIcon icon={faAngleDown} /> */}
        </div>
        {isVisibleTwo && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            voluptate animi quis aspernatur ut in quo aliquam a asperiores rerum
            eveniet minus, laborum quod! Et, necessitatibus possimus. Et,
            possimus delectus?
          </p>
        )}
      </div>
      <div>
        <div className={styles.AccoTitle} onClick={handleOnClickThree}>
          <button type="button">
            <h3>Accordian Three</h3>

            {/* Learning Three */}
            {isVisibleThree ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
            {/* Learning three ends */}
          </button>

          {/* <FontAwesomeIcon icon={faAngleDown} /> */}
        </div>
        {isVisibleThree && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            voluptate animi quis aspernatur ut in quo aliquam a asperiores rerum
            eveniet minus, laborum quod! Et, necessitatibus possimus. Et,
            possimus delectus?
          </p>
        )}
      </div>
    </div>
  );
};

export default Accordian;

// 👉In learning one

// useState Hook: The code demonstrates the usage of the useState hook from React. This hook allows functional components to manage state. In this case, it's used to manage the visibility state (isVisible) of the accordion content.

// State Management: The isVisible state is used to determine whether the accordion content should be visible or hidden. When the component is initialized, isVisible is set to false, indicating that the content is initially hidden.

// 👉In learning two

// Event Handling: The handleOnClick function is an event handler that is called when the accordion title is clicked. It toggles the isVisible state between true and false, effectively toggling the visibility of the accordion content.

// 👉In learning three

// Conditional Rendering: The JSX code uses a conditional rendering pattern to conditionally render the accordion content based on the value of isVisible. If isVisible is true, the content (<p>Hello Accordian One</p>) is rendered; otherwise, it's not rendered.
