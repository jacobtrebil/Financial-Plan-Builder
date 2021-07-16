import Expenses from "../../../models/expenseSchema";
import dbConnect from "../../../util/wizardDbConnect";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const expenses = Expenses.find({
            planId: id, 
        });
        res.status(200).json(expenses);
        return;
      } catch (error) {
        res.status(400).json();
        return;
      }
    default:
      res.status(400).json();
      break;
  }
}
