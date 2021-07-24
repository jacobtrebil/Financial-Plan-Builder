import dbConnect from "../../../util/wizardDbConnect";
import Plan from "../../../models/wizardSchema";
import WizardCalculationHelper from "../helper/wizardCalculationsHelper";

export default async function handler(req, res) {
  const { method } = req;
  const id = req.query.id;

  await dbConnect();

  switch (method) {
    case "PUT":
      try {
        console.log('req body ==========', req.body);
        console.log(id);
        const { livingExpense, currentSavings, retirementAge, riskScore } = req.body;

        await Plan.updateOne({_id: id}, {
          livingExpense,
          currentSavings,
          retirementAge,
          riskScore,
        });

        await WizardCalculationHelper.reCalculate(id);

        // I coule create a seperate API call that is only done the first time, and then not include all of the
        // Calculations for slighltyMore, muchMore, etc. so that they're all only done once.

        // turn this into a service pattern - research how to do this
        // minimize saves in db calls, db calls are expensive

        const plan = await Plan.findById(id);
        res.status(200).json(plan);
        return;
      } catch (error) {
        console.log(error);
        res.status(400).json();
        return;
      }
    default:
      res.status(400).json();
      break;
  }
}
