import React, { useContext, useEffect, useState } from "react";
import ToolBar from "../components/ToolBar";
import TableDetails from "../components/TableDetails";
import BoxDetails from "../components/BoxDetails";
import { AppContext } from "../AppContext";
import BoxAddress from "../components/BoxAddress";

export default function TrackScreen() {
  const { shippingDataValue } = useContext(AppContext);
  return (
    <div
      style={{
        paddingBottom: 100,
        paddingRight: "15%",
        paddingLeft: "15%",
        paddingTop: "2%",
      }}
    >
      <ToolBar />
      <div style={{ paddingTop: 100 }} />
      <div>{shippingDataValue ? <BoxDetails /> : null}</div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <BoxAddress />
        <TableDetails />
      </div>
    </div>
  );
}
