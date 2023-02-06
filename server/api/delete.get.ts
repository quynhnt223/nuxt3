import { getQuery } from "h3";
import { del } from "../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const { col, id } = useQuery(event);

    await del(col, id);

    return { result: id }
  } catch (error) {
    return { error: error.message }
  }
});