import moment from "moment";

export const prettyDate = (UTCDate: string) => {
  let m = moment(new Date(UTCDate));
  return m.format("DD.MM.YYYY")
}