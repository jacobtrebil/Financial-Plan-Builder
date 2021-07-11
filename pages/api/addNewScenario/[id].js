import Scenarios from "../../../models/scenarioSchema";
import dbConnect from "../../../util/wizardDbConnect";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const { scenarioName, currentSavings, livingExpense, retirementAge, riskScore } = req.body
        const scenario = Scenarios.create({
          planId: id,
          scenarioName,
          currentSavings,
          livingExpense,
          retirementAge,
          riskScore
        });
        res.status(200).json(scenario);
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
