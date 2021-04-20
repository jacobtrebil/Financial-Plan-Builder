export const createPlan = async (plan) => {
    const response = await fetch('/api/wizardapi', {
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
    const response = await fetch(`/api/wizardapi/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(plan)
    })
    return await response.json();
  }