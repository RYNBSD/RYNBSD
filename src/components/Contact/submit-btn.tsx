"use client";

import { memo, useCallback, useState, type FC } from "react";
import PropsType from "prop-types";

const SubmitBtn: FC<Props> = ({ content, action }) => {
  const [disabled, setDisabled] = useState(false);

  const formAction = useCallback(async (formData: FormData) => {
    setDisabled(true);
    try {
      await action(formData);
      alert("Thanks 😀, message received");
    } catch (error) {
      alert("Sorry 🥲, message not received");
    } finally {
      setDisabled(false);
    }
  }, [action]);

  return (
    <button
      formAction={formAction}
      disabled={disabled}
      className={`px-5 py-3 bg-black rounded text-white text-xl font-semibold leading-normal transition tracking-tight ${
        disabled && "opacity-50"
      }`}
      type="submit"
    >
      {content}
    </button>
  );
};

SubmitBtn.propTypes = {
  content: PropsType.string.isRequired,
  action: PropsType.func.isRequired,
};

type Props = {
  content: string;
  action: (formData: FormData) => Promise<void>;
};

export default memo(SubmitBtn);
