import React, { memo, useCallback } from "react";

const Reset = memo((props) => {
  console.log("reset");
  const onReset = useCallback(() => {
    props.onReset();
  }, [props]);

  return (
    <button className="reset-button" onClick={onReset}>
      Reset All
    </button>
  );
});

export default Reset;
