import Expenses from "../../../models/expenseSchema";
import dbConnect from "../../../util/wizardDbConnect";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const { ageAtPurchase, annualCost, nameOfExpense, upfrontCost } = req.body
        const expense = Expenses.create({
            planId: id, 
            ageAtPurchase, 
            annualCost, 
            nameOfExpense, 
            upfrontCost
        });
        res.status(200).json(expense);
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
