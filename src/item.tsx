import React from "react";

type Props = {
  value: string
}
export default function Item(props: Props) {
  return <div>{props.value}</div>
};
