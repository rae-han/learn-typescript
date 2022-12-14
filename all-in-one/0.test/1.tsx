import React, { useState } from "react";

interface ChildrenProps {
  data: number;
  onClick: () => void;
}

type Obj = {
  data: null | number;
};

const Children = (props: ChildrenProps) => {
  return null;
};

const Parent = () => {
  const [open, setOpen] = useState(false);
  const [a, setA] = useState<Obj>({
    data: null,
  });

  return (
    <>
      {open && a.data && (
        <Children
          data={a.data}
          onClick={() => {
            open;
            if (a.data) {
              a.data;
            }
            a.data;
          }}
        />
      )}
    </>
  );
};

export default Parent;