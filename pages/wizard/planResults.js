import _dynamic from 'next/dynamic';
import { useRouter } from "next/router";
import { onePagePlan } from '../../components/onePagePlan';

const onePagePlanComponent = _dynamic(() =>
  import('../../components/onePagePlan').then((mod) => mod.onePagePlan));

export default function planResults() {

  const router = useRouter();
  const { planId } = router.query;

  return (
    <div>
      <onePagePlanComponent />
      <div className="savePlanButtonsSection">
        <button className="planResultsPrintButton">Download 1-Page Plan</button>
        <button className="planResultsPDFButton">Download 10-Page Plan</button>
      </div>
      <div>
        <button 
        className="planResultsDashboardButton"
        onClick={function clickHandler() {
          router.push(`../?planId=${plan._id}`);
        }}
        >Back to Dashboard →</button>
      </div>
    </div>
  )};