
export default function handler(req, res) {
    res.status(200).json({ data: req.body })
    console.log(req.body);
} 

export const createPlan = async (plan) => {
    const response = await fetch('/api/plans', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(plan)
    })
    return await response.json();
  }
  
  export const updatePlan = async (id, plan) => {
    const response = await fetch(`/api/plans/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(plan)
    })
    return await response.json();
  }
  


/* fetch('section-1-retirement-age').then(function(response) {
    console.log(response.headers.get('Content-Type'));
}); */

/* if (req.method === 'POST') {
        return res.status(405).end();
    }

    const { retirementage } = req.body;

    console.log(retirementage);

    res.end(); */