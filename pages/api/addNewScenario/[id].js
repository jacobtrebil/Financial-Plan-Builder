import Scenarios from "../../../models/scenarioSchema";
import dbConnect from "../../../util/wizardDbConnect";
import { useRouter } from "next/router";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const { scenarioName, socialSecurityAge, currentSavings, retirementAge, riskScore, partTimeWorkDecision, pensionStartAge } = req.body
        const scenario = Scenarios.create({
          planId: id,
          scenarioName,
          socialSecurityAge,
          currentSavings,
          retirementAge,
          riskScore,
          partTimeWorkDecision,
          pensionStartAge,
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
