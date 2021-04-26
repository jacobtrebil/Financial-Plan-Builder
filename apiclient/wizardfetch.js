export const createPlan = async (plan) => {
    const response = await fetch('/api/wizardpostapi', {
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
    const response = await fetch(`/api/wizardputapi/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(plan)
    })
    return await response.json();
  }

  export const getData = async (id, plan) => {
    const response = await fetch('mongodb://localhost:27017/fpbdatabase/plans/[id]', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(plan)
    })
    return await response.json();
  }