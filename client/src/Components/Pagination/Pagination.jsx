import React from "react";
import "./Pagination.css";

export default function Pagination() {
  return (
    <>
      <div class="pagination">
        <a href="#">&laquo;</a>
        <a class="active" href="#">
          1
        </a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">&raquo;</a>
      </div>
    </>
  );
}
