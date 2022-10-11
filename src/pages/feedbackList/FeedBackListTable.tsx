import React from "react";
import { FEEDBACK_FORM_LABEL } from "../../shared/utils/constant";
import { getDataFromLocalStorage } from "../../shared/utils/helper";

export default function FeedBackListTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Form details</th>
          <th>Customer Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>{FEEDBACK_FORM_LABEL.SERVICE}</th>
          <th>{FEEDBACK_FORM_LABEL.BEVERAGE}</th>
          <th>{FEEDBACK_FORM_LABEL.CLEAN}</th>
          <th className="remove-border">{FEEDBACK_FORM_LABEL.FOOD}</th>
        </tr>
      </thead>
      <tbody>
        {getDataFromLocalStorage().map((item: any, index: number) => (
          <tr className="row" key={index}>
            <td>
              <input type="checkbox" />
            </td>
            <td>View details</td>
            <td>{item?.name}</td>
            <td>{item?.email}</td>
            <td>{item?.phone}</td>
            <td>{item?.service}</td>
            <td>{item?.beverage}</td>
            <td>{item?.clean}</td>
            <td className="remove-border">{item?.food}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
