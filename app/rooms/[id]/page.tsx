import React from "react";

function RoomDetails({ params }: { params: { id: string } }) {
  return <div>RoomDetails {params.id}</div>;
}

export default RoomDetails;
