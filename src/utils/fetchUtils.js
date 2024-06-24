export const deleteRow = async function (url, id, rowId) {
  const res = await fetch(
    `${url}/v1/outlay-rows/entity/${id}/row/${rowId}/delete`,
    {
      method: "DELETE",
    },
  );

  if (res.ok) {
    console.log("deleted");
  } else {
    console.error("Failed to delete row:", res.status, res.statusText);
  }
};
