import { useEffect } from "react";
import { FEEDBACK_FORM_LABEL } from "../../shared/utils/constant";

export default function FeedBackListTable({
  checkValue,
  setCheckedValue,
  feedbackList,
}: any) {
  useEffect(() => {
    setCheckedValue(new Array(feedbackList?.length)?.fill(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedbackList]);

  const getCheckDetails = (e: any) => {
    const { name, value, checked } = e.target;
    if (name === "all") {
      setCheckedValue(new Array(feedbackList?.length)?.fill(checked));
    } else {
      const newChecked = [...checkValue];
      newChecked[value] = checked;
      setCheckedValue(newChecked);
    }
  };

  return (
    <>
      {feedbackList?.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={getCheckDetails}
                  value="all"
                  name="all"
                  checked={checkValue?.every((item: any) => item === true)}
                />
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
            {feedbackList?.map((item: any, index: number) => (
              <tr className="row" key={index}>
                <td>
                  <input
                    type="checkbox"
                    onChange={getCheckDetails}
                    value={index}
                    name="single"
                    checked={checkValue[index]}
                  />
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
      ) : (
        <div className="no-data-found">No data found</div>
      )}
    </>
  );
}
